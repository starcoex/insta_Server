import gql from "graphql-tag";

export default gql`
  type Query {
    seeRoom(id: Int!): SeeRoomResponse
  }
  type SeeRoomResponse {
    code: Int!
    success: Boolean!
    message: String!
    room: Room
  }
`;
