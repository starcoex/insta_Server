import { create } from "domain";
import { Resolvers, Hashtag } from "../../__generates__/types";
import prisma from "../../script";

const Mutation: Resolvers = {
  Mutation: {
    //@ts-ignore
    uploadPhoto: async (_, { file, caption }, { dataSources }) => {
      let hashtagObject = [];
      if (caption) {
        // parse caption
        const hashtags = caption.match(/#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/g);
        // get or create Hashtags
        hashtagObject = hashtags.map((hashtag) => ({
          where: {
            hashtag,
          },
          create: {
            hashtag,
          },
        }));
        const photo = await prisma.photo.create({
          data: {
            file,
            caption,
            user: {
              connect: {
                id: dataSources.loginUser.id,
              },
            },
            ...(hashtagObject.length > 0 && {
              hashtags: {
                connectOrCreate: hashtagObject,
              },
            }),
          },
        });
        return {
          code: 200,
          success: true,
          message: "Hashtag Success",
          photo: photo,
        };
      }

      // Save the photo WITH the parsed hashtags
      // add the photo to the hashtags
    },
  },
};
export default Mutation;
