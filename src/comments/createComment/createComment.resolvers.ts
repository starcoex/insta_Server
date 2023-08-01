import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const resolvers: Resolvers = {
  Mutation: {
    createComment: async (_, { photoId, payload }, { dataSources }) => {
      console.log(photoId);
      try {
        const photo = await prisma.photo.findUnique({
          where: { id: photoId },
          select: {
            id: true,
          },
        });
        if (!photo) {
          return {
            code: 404,
            success: false,
            message: "Commnet not",
            // photo: null,
          };
        }
        await prisma.comment.create({
          data: {
            payload: payload,
            photo: {
              connect: {
                id: photoId,
              },
            },
            user: {
              connect: {
                id: dataSources.loginUser.id,
              },
            },
          },
        });
        return {
          code: 200,
          success: true,
          message: "Commnet Success",
          // photo: updateComment,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
        };
      }
    },
  },
};
export default resolvers;
