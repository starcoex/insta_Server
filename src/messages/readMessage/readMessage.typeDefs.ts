import gql from "graphql-tag";

export default gql`
  type Mutation {
    readMessage(id: Int!): readMessageResponse
  }
  type readMessageResponse {
    code: Int!
    success: Boolean!
    message: String!
  }
`;
