import gql from "graphql-tag";

export default gql`
  type SeeFollwersResponse {
    # ok: Boolean!
    # error: String
    # followers: [User]
    # totalPages: Int
    code: Int!
    success: Boolean!
    message: String!
    followers: [User]
    totalPages: Int
  }
  type Query {
    seeFollowers(username: String!, page: Int!): SeeFollwersResponse!
  }
`;
