import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const resolvers: Resolvers = {
  Mutation: {
    deleteMessage: async (_, { id }, { dataSources }) => {
      const message = await prisma.message.findFirst({
        where: {
          id: id,
          read: false,
          userId: dataSources.loginUser.id,
          room: {
            users: {
              some: { id: dataSources.loginUser.id },
            },
          },
        },
        select: {
          id: true,
        },
      });
      if (!message) {
        return {
          code: 404,
          success: false,
          message: "Message not found.",
        };
      }
      await prisma.message.delete({ where: { id: id } });
      return {
        code: 200,
        success: true,
        message: "Message Delete Good",
      };
    },
  },
};
export default resolvers;
