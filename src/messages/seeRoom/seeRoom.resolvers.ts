import { Resolvers, Room } from "../../__generates__/types";
import prisma from "../../script";
const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    seeRoom: async (_, { id }, { dataSources }) => {
      try {
        const room = await prisma.room.findFirst({
          where: {
            id: id,
            users: {
              some: {
                id: dataSources.loginUser.id,
              },
            },
          },
        });
        return {
          code: 200,
          success: true,
          message: "Show Room",
          room: room,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
          room: null,
        };
      }
    },
  },
};

export default resolvers;
