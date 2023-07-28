import gql from "graphql-tag";

export default gql`
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
  type Upload {
    fileName: String
    mimeType: String
    encoding: String
    createReadStream: String
  }
`;
