import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    seeFollowing: async (_, { username, cursorId }, { dataSources }) => {
      const user = await prisma.user.findUnique({
        where: { userName: username },
        select: {
          id: true,
        },
      });
      if (!user) {
        return {
          code: 404,
          success: false,
          message: "User not found",
        };
      }
      const follwing = await prisma.user
        .findUnique({
          where: {
            userName: username,
          },
        })
        .following({
          take: 5,
          skip: cursorId ? 1 : 0,
          ...(cursorId && { cursor: { id: cursorId } }),
        });
      return {
        code: 200,
        success: true,
        message: "User found",
        following: follwing,
        // following: dataSources.loginUser.following,
      };
    },
  },
};

export default resolvers;
