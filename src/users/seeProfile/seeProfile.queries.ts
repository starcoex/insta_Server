import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const Query: Resolvers = {
  Query: {
    seeProfile: (_, { username }, __) => {
      return prisma.user.findUnique({
        where: {
          userName: username,
        },
      });
    },
  },
};
export default Query;
