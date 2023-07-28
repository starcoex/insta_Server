// import gql from "graphql-tag";
const typeDefs = `#graphql

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
export default typeDefs;
