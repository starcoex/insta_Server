import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const Mutation: Resolvers = {
  Mutation: {
    unfollowUser: async (_, { username }, { dataSources }) => {
      try {
        const user = prisma.user.findUnique({
          where: {
            userName: dataSources.loginUser.userName,
          },
        });
        if (!user) {
          return {
            code: 404,
            success: false,
            message: "That user does not exits.",
          };
        }
        await prisma.user.update({
          where: {
            id: dataSources.loginUser.id,
          },
          data: {
            following: {
              disconnect: {
                userName: username,
              },
            },
          },
        });
        return {
          code: 200,
          success: true,
          message: "That user does exist.",
        };
      } catch (error) {
        return error;
      }
    },
  },
};

export default Mutation;
