import gql from "graphql-tag";

export default gql`
  type Message {
    id: Int!
    user: User!
    payload: String!
    isMine: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    room: Room!
    read: Boolean!
  }
  type Room {
    id: Int!
    messages: [Message]
    users: [User]
    unreadNumber: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  # type Subscription {
  #   messageAdded(messageId: Int!): Message
  # }
`;
