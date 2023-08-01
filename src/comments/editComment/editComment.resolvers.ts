import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const resolvers: Resolvers = {
  Mutation: {
    editComment: async (_, { id, payload }, { dataSources }) => {
      const comment = await prisma.comment.findUnique({
        where: { id },
        select: {
          userId: true,
        },
      });
      if (!comment) {
        return {
          code: 404,
          success: false,
          message: "Comment not found",
        };
      } else if (comment.userId !== dataSources.loginUser.id) {
        return {
          code: 404,
          success: false,
          message: "Not authorized",
        };
      } else if (comment.userId === dataSources.loginUser.id) {
        await prisma.comment.update({
          where: { id: id },
          data: {
            payload,
          },
        });
        return {
          code: 200,
          success: true,
          message: "Delete Good",
        };
      }
    },
  },
};

export default resolvers;
