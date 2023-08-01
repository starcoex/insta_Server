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
    followers: [User]
    following: [User]
    createdAt: DateTime!
    updatedAt: DateTime!
    totalFollowing: Int!
    totalFollowers: Int!
    isFollowing: Boolean!
    # isMe: IsMe!
    isMe: Boolean!
    photos: [Photo]
  }
  #   type Upload {
  #     fileName: String
  #     mimeType: String
  #     encoding: String
  #     createReadStream: String
  #   }
  #
  #   type IsMe {
  #     code: Int!
  #     success: Boolean
  #     message: String
  #     user: User!
  #   }
  #
`;
