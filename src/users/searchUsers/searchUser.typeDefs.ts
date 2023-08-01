import gql from "graphql-tag";

export default gql`
  type SearchUsersResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: [User]!
  }
  type Query {
    searchUsers(keyword: String!, page: Int): SearchUsersResponse
  }
  # type Query {
  #   searchUsers(keyword: String!, page: Int): [User]
  # }
`;
