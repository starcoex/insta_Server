import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    seePhotoComments: async (_, { id, page }) => {
      return await prisma.comment.findMany({
        where: { photoId: id },
        take: 10,
        skip: (page - 1) * 10,
        orderBy: {
          createdAt: "desc",
        },
      });

      // try {
      // return await prisma.comment.findUnique({ where: { id: id } });
      // return {
      //   code: 200,
      //   success: true,
      //   message: "PhotoComment Success",
      // };
      // } catch (error) {
      // return {
      //   code: error.extensions.response.status,
      //   success: false,
      //   message: error.extensions.response.body,
      // };
    },
  },
};

export default resolvers;
