import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

// const resolvers: Resolvers = {
//   Query: {
//     seeFollowers: async (_, { username, page }) => {
//       const followers = await prisma.user
//         .findUnique({ where: { userName: username } })
//         .followers({
//           take: 5,
//           skip: (page - 1) * 5,
//         });
//       return {
//         ok: true,
//         followers: followers,
//       };
//     },
//   },
// };
const resolvers: Resolvers = {
  Query: {
    //이유를 모르겠음
    //@ts-ignore
    seeFollowers: async (_, { username, page }) => {
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
        followers: [followers],
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

export default resolvers;
