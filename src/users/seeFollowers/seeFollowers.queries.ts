import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const Query: Resolvers = {
  Query: {
    //@ts-ignore
    seeFollowers: async (parent, { username, page }) => {
      console.log(parent);
      const user = await prisma.user.findUnique({
        where: {
          userName: username,
        },
        select: {
          id: true,
        },
      });
      if (!user) {
        return {
          code: 404,
          success: false,
          message: "User not found",
        };
      }
      const followers = await prisma.user
        .findUnique({ where: { userName: username } })
        .followers({
          take: 10,
          skip: (page - 1) * 10,
        });
      const totalFollowers = await prisma.user.count({
        where: {
          followers: {
            some: {
              userName: username,
            },
          },
        },
      });
      return {
        code: 200,
        success: true,
        message: "Followers Success",
        followers: followers,
        totalPages: Math.ceil(totalFollowers / 10),
      };

      // const following = await prisma.user.findMany({
      //   where: {
      //     following: {
      //       some: {
      //         userName: username,
      //       },
      //     },
      //   },
      // });
      // console.log(following);
    },
  },
};

export default Query;
