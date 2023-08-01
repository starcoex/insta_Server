import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const resolvers: Resolvers = {
  Query: {
    searchPhotos: async (_, { keyword }, { dataSources }) => {
      // return await prisma.photo.findMany({
      //   where: {
      //     caption: {
      //       startsWith: keyword,
      //     },
      //   },
      // });
      try {
        const photo = await prisma.photo.findMany({
          where: {
            caption: {
              startsWith: keyword,
            },
          },
        });
        return {
          code: 200,
          success: true,
          message: "Feed Good",
          photo: photo,
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

export default resolvers;
