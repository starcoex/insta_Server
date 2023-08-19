import gql from "graphql-tag";

export default gql`
  type Mutation {
    login(username: String!, password: String!): LoginResponse
    # login(username: String!, password: String!): User!
  }
  type LoginResponse {
    code: Int!
    success: Boolean!
    message: String!
    token: String
    # user: User
  }
`;
