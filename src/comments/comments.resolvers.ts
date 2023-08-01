import { Resolvers, CommentResolvers, Comment } from "../__generates__/types";

const resolvers: Resolvers = {
  Comment: {
    isCommentMe: (parent, _, { dataSources }) => {
      const {
        photo: { userId },
      } = parent;
      if (!dataSources.loginUser) {
        return false;
      }
      return userId === dataSources.loginUser.id;
    },
  },
};
export default resolvers;

// const Comment: CommentResolvers = {
//   isCommentMe: ({ userId }, _, { dataSources }) => {
//     if (!dataSources.loginUser) {
//       return false;
//     }
//     return userId === dataSources.loginUser.id;
//   },
// };
