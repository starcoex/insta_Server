import gql from "graphql-tag";

export default gql`
  type UnfollowUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    token: String
  }
  type Mutation {
    unfollowUser(username: String!): UnfollowUserResponse
  }
`;
