import { create } from "domain";
import { Resolvers, Hashtag } from "../../__generates__/types";
import prisma from "../../script";
import { GraphQLUpload } from "graphql-upload-minimal";
import { uploadAwsS3 } from "../../util/aws.s3.upload";
import { processHashtags } from "../../util/photos.utils";

const resolvers: Resolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    uploadPhoto: async (_, { file, caption }, { dataSources }) => {
      let hashtagObject = [];
      // if (caption) {
      //   // parse caption
      //   const hashtags = caption.match(/#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/g);
      //   // get or create Hashtags
      //   hashtagObject = hashtags.map((hashtag) => ({
      //     where: {
      //       hashtag,
      //     },
      //     create: {
      //       hashtag,
      //     },
      //   }));
      if (caption) {
        hashtagObject = processHashtags(caption);
      }
      const fileUrl = await uploadAwsS3(
        file,
        dataSources.loginUser.id,
        "uploads"
      );
      console.log(fileUrl);
      const photo = await prisma.photo.create({
        data: {
          file: fileUrl,
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
    },

    // Save the photo WITH the parsed hashtags
    // add the photo to the hashtags
  },
};

export default resolvers;
