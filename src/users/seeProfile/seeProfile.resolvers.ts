import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const resolvers: Resolvers = {
  Query: {
    //@ts-ignore
    seeProfile: (parent, { username }, { dataSources }) => {
      return prisma.user.findUnique({
        where: {
          userName: username,
        },
        include: {
          followers: true,
          following: true,
        },
      });
      // return dataSources.loginUser;
    },
  },
};
export default resolvers;
