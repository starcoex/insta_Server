import gql from "graphql-tag";

export default gql`
  type Query {
    seePhotoComments(id: Int!, page: Int!): [Comment]
  }
  type SeePhotoCommentsResponse {
    code: Int!
    success: Boolean!
    message: String!
    comment: [Comment]
  }
`;
