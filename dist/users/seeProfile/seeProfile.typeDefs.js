// import gql from "graphql-tag";
const typeDefs = `#graphql
  type Query {
    seeProfile(username: String!): User
  }
`;
export default typeDefs;
