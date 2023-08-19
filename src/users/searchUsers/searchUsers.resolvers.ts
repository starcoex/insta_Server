import { PostalCode } from "graphql-scalars/typings/mocks";
import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const resolvers: Resolvers = {
  Query: {
    //이유를 모르겠음
    //@ts-ignore
    searchUsers: async (_, { keyword, page }, { dataSources }) => {
      if (keyword.length < 1) {
        return {
          code: 404,
          success: false,
          message: "Searching keyword length should be more than 1",
        };
      }
      const user = await prisma.user.findMany({
        where: {
          // userName: {
          //   startsWith: keyword.toLowerCase(),
          // },
          OR: [
            { userName: { startsWith: keyword.toLowerCase() } },
            {
              userName: keyword.toLowerCase(),
            },
          ],
        },
        take: 10,
        skip: (page - 1) * 10,
        ...(page && { cursor: { id: page } }),
      });
      // return {
      //   code: 200,
      //   success: true,
      //   message: "User serach Ok.",
      // };
      if (!user) {
        return {
          code: 404,
          success: false,
          message: "User serach No.",
          user: null,
        };
      }
      return {
        code: 200,
        success: true,
        message: "User serach Ok.",
        user: user,
      };
    },
  },
};
export default resolvers;
