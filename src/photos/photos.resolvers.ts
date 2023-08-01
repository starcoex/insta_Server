import { copySync } from "fs-extra";
import { Resolvers, User, PhotoResolvers } from "../__generates__/types";
import prisma from "../script";
const resolvers: Resolvers = {
  Photo: {
    //@ts-ignore
    user: async ({ userId }, _, { dataSources }) => {
      return prisma.user.findUnique({
        where: { id: userId },
      });
      // return dataSources.loginUser;
    },
    //@ts-ignore
    hashtag: ({ id }, _, { dataSources }) => {
      return prisma.hashtag.findMany({
        where: {
          photos: {
            some: { id: id },
          },
        },
      });
    },
    likesNumber: ({ id }) => {
      return prisma.like.count({ where: { photoId: id } });
    },
    commentsNumber: ({ id }) => {
      return prisma.comment.count({ where: { photoId: id } });
    },
    isCommentMe: ({ userId }, _, { dataSources }) => {
      console.log(userId);
      console.log("Hello");
      if (!dataSources.loginUser) {
        return false;
      }
      return userId === dataSources.loginUser.id;
    },
  },
  Hashtag: {
    photos: ({ id }, { page }, { dataSources }) => {
      return prisma.hashtag.findFirst({ where: { id: id } }).photos();
    },
    totalPhotos: ({ id }) => {
      return prisma.photo.count({
        where: {
          hashtags: {
            some: {
              id,
            },
          },
        },
      });
    },

    //@ts-ignore
    // hashtag: ({ id }, _, { dataSources }) => {
    //   return prisma.photo.findMany({
    //     where: {
    //       hashtags: {
    //         some: { id: id },
    //       },
    //     },
    //   });
    // },
  },
};

export default resolvers;
