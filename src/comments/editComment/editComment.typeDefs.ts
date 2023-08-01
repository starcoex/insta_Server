import gql from "graphql-tag";

export default gql`
  type Mutation {
    editComment(id: Int!, payload: String): EditCommentResponse
  }
  type EditCommentResponse {
    code: Int!
    success: Boolean!
    message: String!
  }
`;
