import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    seePhotoLikes: async (_, { id }, { dataSources }) => {
      const likes = await prisma.like.findMany({
        where: { photoId: id },
        select: {
          user: true,
        },
      });
      return likes.map((like) => like.user);
    },
  },
};

export default resolvers;
