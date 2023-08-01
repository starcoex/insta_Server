import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";
import { ResolversProtected } from "../../type";
import { protectedResolver } from "../../util/user.protect.Resover";

//@ts-ignore
// const Mutiotn: ResolversProtected = {
//   Mutation: {
//     followUser: protectedResolver(async (_, { username }, { dataSources }) => {
//       try {
//         const user = await prisma.user.findUnique({
//           where: { userName: username },
//         });
//         if (!user) {
//           return {
//             code: 404,
//             success: false,
//             message: "That user does not exits.",
//           };
//         }
//         await prisma.user.update({
//           where: {
//             id: dataSources.loginUser.id,
//           },
//           data: {
//             following: {
//               connect: {
//                 userName: username,
//               },
//             },
//           },
//         });
//         return {
//           code: 200,
//           success: true,
//           message: "That user does exist.",
//         };
//       } catch (error) {
//         return error;
//       }
//     }),
//   },
// };
const resolvers: Resolvers = {
  Mutation: {
    followUser: async (_, { username }, { dataSources }) => {
      try {
        const user = await prisma.user.findUnique({
          where: { userName: username },
        });
        if (!user) {
          return {
            code: 404,
            success: false,
            message: "That user does not exits.",
          };
        }
        await prisma.user.update({
          where: {
            id: dataSources.loginUser.id,
          },
          data: {
            following: {
              connect: {
                userName: username,
              },
            },
          },
        });
        return {
          code: 200,
          success: true,
          message: "That user does exist.",
        };
      } catch (error) {
        return error;
      }
    },
  },
};

export default resolvers;
