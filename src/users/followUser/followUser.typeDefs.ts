import gql from "graphql-tag";

export default gql`
  type FollowUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    token: String
  }
  type Mutation {
    followUser(username: String!): FollowUserResponse
  }
`;
