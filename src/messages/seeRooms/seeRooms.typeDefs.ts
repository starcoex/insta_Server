import gql from "graphql-tag";

export default gql`
  type Query {
    seeRooms: SeeRoomsResponse
  }
  type SeeRoomsResponse {
    code: Int!
    success: Boolean!
    message: String!
    room: [Room]
  }
`;
