import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";
import { pubsub } from "../../subscript";
import { NEW_MESSAGE } from "../../util/constants.subscription";

const resolvers: Resolvers = {
  Mutation: {
    sendMessage: async (_, { payload, roomId, userId }, { dataSources }) => {
      try {
        let room = null;
        if (userId) {
          const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
              id: true,
            },
          });
          if (!user) {
            return {
              code: 404,
              success: false,
              message: "This user does not exist",
            };
          }
          room = await prisma.room.create({
            data: {
              users: {
                connect: [
                  {
                    id: userId,
                  },
                  { id: dataSources.loginUser.id },
                ],
              },
            },
          });
        } else if (roomId) {
          room = await prisma.room.findUnique({
            where: { id: roomId },
            select: { id: true },
          });
          if (!room) {
            return {
              code: 404,
              success: false,
              message: "Room not found.",
            };
          }
        }
        const message = await prisma.message.create({
          data: {
            payload: payload,
            room: {
              connect: {
                id: room.id,
              },
            },
            user: {
              connect: {
                id: dataSources.loginUser.id,
              },
            },
          },
        });
        pubsub.publish(NEW_MESSAGE, { roomSubscription: message });
        return {
          code: 200,
          success: true,
          message: "Room found",
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
        };
      }
    },
  },
};

export default resolvers;
