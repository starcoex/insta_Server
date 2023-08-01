import { Resolvers, Hashtag } from "../../__generates__/types";
import prisma from "../../script";

export const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    seeHashtag: async (_, { hashtag }, { dataSources }) => {
      return await prisma.hashtag.findMany({ where: { hashtag: hashtag } });
    },
  },
};

export default resolvers;
