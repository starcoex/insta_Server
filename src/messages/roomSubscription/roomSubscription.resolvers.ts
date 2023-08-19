import { withFilter } from "graphql-subscriptions";
import { Resolvers } from "../../__generates__/types";
import { pubsub } from "../../subscript";
import { NEW_MESSAGE } from "../../util/constants.subscription";
import prisma from "../../script";
import { error } from "console";

// const resolvers: Resolvers = {
//   Subscription: {
//     roomSubscription: {
//       // subscribe: () => pubsub.asyncIterator(NEW_MESSAGE),
//       //@ts-ignore
//       subscribe: withFilter(
//         () => pubsub.asyncIterator(NEW_MESSAGE),
//         ({ roomSubscription }, { id }, context) => {
//           return roomSubscription.roomId === id;
//         }
//       ),
//     },
//   },
// };

const resolvers: Resolvers = {
  Subscription: {
    roomSubscription: {
      //@ts-ignore
      subscribe: async (parent, args, context, info) => {
        const room = await prisma.room.findFirst({
          where: {
            id: args.id,
            users: {
              some: {
                id: context.dataSources.loginUser.id,
              },
            },
          },
          select: { id: true },
        });
        if (!room) {
          throw new error("You shall not see this.");
        }
        return withFilter(
          () => pubsub.asyncIterator(NEW_MESSAGE),
          // ({ roomSubscription }, { id }) => {
          //   return roomSubscription.roomId === id;
          // }
          async ({ roomSubscription }, { id }, { dataSources }) => {
            if (roomSubscription.roomId === id) {
              const room = await prisma.room.findFirst({
                where: {
                  id,
                  users: {
                    some: {
                      id: dataSources.loginUser.id,
                    },
                  },
                },
                select: {
                  id: true,
                },
              });
              if (!room) {
                return false;
              }
              return true;
            }
          }
        )(parent, args, context, info);
      },
    },
  },
};

export default resolvers;
