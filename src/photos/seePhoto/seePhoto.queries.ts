import { Resolvers } from "../../__generates__/types";
import prisma from "../../script";

const Query: Resolvers = {
  Query: {
    seePhoto: async (parent, { id }, { dataSources }) => {
      console.log("parent", parent);
      return await prisma.photo.findUnique({ where: { id: id } });

      // try {
      //   const photo = prisma.photo.findUnique({ where: { id: id } });
      //   return {
      //     code: 200,
      //     success: true,
      //     message: "See Photo",
      //     photo: photo,
      //   };
      // } catch (error) {
      //   return {
      //     code: error.extensions.response.status,
      //     success: false,
      //     message: error.extensions.response.body,
      //     photo: null,
      //   };
      // }
    },
  },
  // Photo: {
  //   //@ts-ignore
  //   user: (parent, _, { dataSources }) => {
  //     console.log(parent);
  //     return "";
  //   },
  // },
};
export default Query;
