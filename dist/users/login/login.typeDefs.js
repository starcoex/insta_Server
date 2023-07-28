// import gql from "graphql-tag";
const typeDefs = `#graphql

  type Mutation {
    login(username: String!, password: String!): LoginResponse!
  }
  type LoginResponse {
    code: Int!
    success: Boolean!
    message: String!
    token: String
    user: User
  }
`;
export default typeDefs;
