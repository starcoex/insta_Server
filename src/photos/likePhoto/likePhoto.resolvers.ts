import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const resolvers: Resolvers = {
  Mutation: {
    toggleLike: async (_, { id }, { dataSources }) => {
      const photo = await prisma.photo.findUnique({ where: { id } });
      if (!photo) {
        return {
          code: 404,
          success: false,
          message: "Photo not found.",
          // like: null,
        };
      }
      const like = await prisma.like.findUnique({
        where: {
          userId_photoId: {
            userId: dataSources.loginUser.id,
            photoId: id,
          },
        },
      });
      if (like) {
        await prisma.like.delete({
          where: {
            userId_photoId: {
              userId: dataSources.loginUser.id,
              photoId: id,
            },
          },
        });
      } else {
        await prisma.like.create({
          data: {
            user: {
              connect: {
                id: dataSources.loginUser.id,
              },
            },
            photo: {
              connect: {
                id: photo.id,
              },
            },
          },
        });
        return {
          code: 200,
          success: true,
          message: "Photo  found.",
          // like: photo,
        };
      }
    },
  },
};

export default resolvers;
