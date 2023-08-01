import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const resolvers: Resolvers = {
  Query: {
    seeFeed: async (_, __, { dataSources }) => {
      try {
        const photo = await prisma.photo.findMany({
          where: {
            OR: [
              {
                user: {
                  followers: {
                    some: {
                      id: dataSources.loginUser.id,
                    },
                  },
                },
              },
              { userId: dataSources.loginUser.id },
            ],
          },
          orderBy: { createdAt: "desc" },
        });
        return {
          code: 200,
          success: true,
          message: "Feed Good",
          photo: photo,
        };
      } catch (error) {
        return {
          code: 404,
          success: false,
          message: "Feed No",
          photo: null,
        }; // return {
        //   code: error.extensions.response.status,
        //   success: false,
        //   message: error.extensions.response.body,
        //   photo: null,
        // };
      }
    },
  },
};

export default resolvers;
