import { Query, Resolvers } from "../__generates__/types";
import prisma from "../script";
const resolvers: Resolvers = {
  Query: {
    user: (_, { id }, __) => {
      return prisma.user.findUnique({ where: { id } });
    },
    users: (_, __, ___) => {
      return prisma.user.findMany();
    },
    seeProfile: (_, { username }, __) => {
      return prisma.user.findUnique({
        where: {
          userName: username,
        },
      });
    },
  },
  Mutation: {
    deleteUser: (_, { id }, __) => {
      return prisma.user.delete({ where: { id } });
    },
  },
};

export default resolvers;
