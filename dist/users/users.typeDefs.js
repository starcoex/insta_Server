const typeDefs = `#graphql
  scalar DateTime

  type Query {
    user(id: Int!): User
    users: [User]
  }
  type Mutation {
    deleteUser(id: Int!): User
  }
  type User {
    id: Int!
    firstName: String!
    lastName: String
    userName: String!
    email: String!
    bio: String
    avatar: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`;
export default typeDefs;
