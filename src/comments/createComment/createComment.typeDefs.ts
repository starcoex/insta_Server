import gql from "graphql-tag";

export default gql`
  type Mutation {
    createComment(photoId: Int!, payload: String!): SeeFeedResponse
  }
  type CreateCommentResponse {
    code: Int!
    success: Boolean!
    message: String!
    # photo: [Photo]
  }
`;
