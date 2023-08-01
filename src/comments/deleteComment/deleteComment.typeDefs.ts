import gql from "graphql-tag";

export default gql`
  type Mutation {
    deleteComment(id: Int!): DeleteCommentResponse
  }
  type DeleteCommentResponse {
    code: Int!
    success: Boolean!
    message: String!
  }
`;
