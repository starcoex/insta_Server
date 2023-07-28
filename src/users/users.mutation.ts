import { Query, Resolvers } from "../__generates__/types";
import prisma from "../script";

const Mutation: Resolvers = {
  Mutation: {
    deleteUser: (_, { id }, __) => {
      return prisma.user.delete({ where: { id } });
    },
  },
};

export default Mutation;
