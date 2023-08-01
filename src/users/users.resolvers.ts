import { Query, Resolvers, User } from "../__generates__/types";
import prisma from "../script";

const resolvers: Resolvers = {
  // Mutation: {
  //   deleteUser: (_, { id }, __) => {
  //     return prisma.user.delete({ where: { id } });
  //   },
  // },
  User: {
    totalFollowing: ({ id }, args, context) => {
      return prisma.user.count({
        where: {
          followers: {
            some: {
              id,
            },
          },
        },
      });
    },
    totalFollowers: ({ id }, args, context) => {
      return prisma.user.count({
        where: {
          followers: {
            some: {
              id,
            },
          },
        },
      });
    },
    isMe: ({ id }, _, { dataSources }) => {
      if (!dataSources.loginUser) {
        return false;
        // return {
        //   code: 404,
        //   success: false,
        //   message: "Loing Not isMe",
        //   user: null,
        // };
      }
      //token id를 넘겨줌
      id = dataSources.loginUser.id;
      return true;
      // const user = prisma.user.findUnique({ where: { id } });
      // return {
      //   code: 200,
      //   success: true,
      //   message: "Loing isMe",
      //   user: user,
      // };
    },
    isFollowing: async ({ id }, _, { dataSources }) => {
      if (!dataSources.loginUser) {
        return false;
      }
      // const user = await prisma.user
      //   .findUnique({ where: { userName: dataSources.loginUser.userName } })
      //   .following({
      //     where: {
      //       id: id,
      //     },
      //   });
      // return user.length !== 0;
      const existsUser = await prisma.user.count({
        where: {
          userName: dataSources.loginUser.userName,
          following: {
            some: { id },
          },
        },
      });
      return Boolean(existsUser);
    },
    photos: ({ id }, _, { dataSources }) => {
      return prisma.user.findUnique({ where: { id } }).photos();
    },
  },
};

export default resolvers;
