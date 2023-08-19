import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const resolves: Resolvers = {
  Query: {
    //@ts-ignore
    seeRooms: async (_, __, { dataSources }) => {
      try {
        const rooms = await prisma.room.findMany({
          where: {
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
          room: rooms,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
          photo: null,
        };
      }
    },
  },
};

export default resolves;
