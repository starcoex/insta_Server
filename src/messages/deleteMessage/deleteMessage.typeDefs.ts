import gql from "graphql-tag";

export default gql`
  type Mutation {
    deleteMessage(id: Int): DeleteMessageResponse
  }
  type DeleteMessageResponse {
    code: Int!
    success: Boolean!
    message: String!
  }
`;
