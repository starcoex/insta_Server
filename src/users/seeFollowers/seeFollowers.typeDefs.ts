import gql from "graphql-tag";

export default gql`
  type SeeFollwersResponse {
    code: Int!
    success: Boolean!
    message: String!
    followers: [User]
    totalPages: Int
  }
  type Query {
    seeFollowers(username: String!, page: Int!): SeeFollwersResponse
  }
`;
