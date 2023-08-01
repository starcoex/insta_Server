import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";
import { processHashtags } from "../../util/photos.utils";

const resolvers: Resolvers = {
  Mutation: {
    editPhoto: async (_, { id, caption }, { dataSources }) => {
      const photo = await prisma.photo.findUnique({
        where: { id },
        include: {
          hashtags: {
            select: {
              hashtag: true,
            },
          },
        },
      });
      if (photo.userId !== dataSources.loginUser.id) {
        return {
          code: 404,
          success: false,
          message: "Not EditPhoto",
          photo: null,
        };
      }
      if (caption) {
        processHashtags(caption);
      }
      const updatePhoto = await prisma.photo.update({
        where: {
          id: id,
        },
        data: {
          caption: caption,
          hashtags: {
            disconnect: photo.hashtags,
            connectOrCreate: processHashtags(caption),
          },
        },
      });
      return {
        code: 200,
        success: true,
        message: "Edit Photo Good",
        photo: updatePhoto,
      };
    },
  },
};
export default resolvers;
