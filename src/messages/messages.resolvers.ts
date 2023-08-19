import { Resolvers } from "../__generates__/types";
import prisma from "../script";

const resolvers: Resolvers = {
  Room: {
    //@ts-ignore
    users: async ({ id }) => {
      return await prisma.room.findUnique({ where: { id: id } }).users();
    },
    //@ts-ignore
    messages: async ({ id }, _, { dataSources }) => {
      // if (!dataSources.loginUser) {
      //   return [];
      // }
      return await prisma.message.findMany({ where: { roomId: id } });
    },
    unreadNumber: async ({ id }, _, { dataSources }) => {
      if (!dataSources.loginUser) {
        return 0;
      }
      return await prisma.message.count({
        where: {
          read: false,
          roomId: id,
          user: {
            id: {
              not: dataSources.loginUser.id,
            },
          },
        },
      });
    },
  },
  Message: {
    //@ts-ignore
    user: ({ id }) => {
      return prisma.message.findUnique({ where: { id: id } }).user();
    },
  },
};

export default resolvers;
