import gql from "graphql-tag";

export default gql`
  type Mutation {
    sendMessage(payload: String!, roomId: Int, userId: Int): SendMessageResponse
  }
  type SendMessageResponse {
    code: Int!
    success: Boolean!
    message: String!
  }
`;
