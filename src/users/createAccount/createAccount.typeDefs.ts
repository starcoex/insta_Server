import gql from "graphql-tag";

export default gql`
  type Mutation {
    createAccount(
      firstname: String!
      lastname: String
      username: String!
      email: String!
      password: String!
    ): CreateAccountResponse!
  }
  type CreateAccountResponse {
    code: Int!
    success: Boolean!
    message: String!
    token: String
    user: User!
  }
`;
