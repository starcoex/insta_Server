import gql from "graphql-tag";

export default gql`
  type SeeFollowingResponse {
    code: Int!
    success: Boolean!
    message: String!
    following: [User]
  }
  type Query {
    seeFollowing(username: String!, cursorId: Int): SeeFollowingResponse
  }
`;
