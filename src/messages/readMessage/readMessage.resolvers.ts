import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const resolvers: Resolvers = {
  Mutation: {
    readMessage: async (_, { id }, { dataSources }) => {
      const messgae = await prisma.message.findFirst({
        where: {
          id,
          userId: {
            not: dataSources.loginUser.id,
          },
          room: {
            users: {
              some: {
                id: dataSources.loginUser.id,
              },
            },
          },
        },
        select: {
          id: true,
        },
      });
      if (!messgae) {
        return {
          code: 404,
          success: false,
          message: "Message not found.",
        };
      }
      await prisma.message.update({
        where: { id },
        data: {
          read: true,
        },
      });
      return {
        code: 200,
        success: true,
        message: "Message found",
      };
    },
  },
};
export default resolvers;
