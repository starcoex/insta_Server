import gql from "graphql-tag";

export default gql`
  type SharedMutationResponse {
    code: Int!
    success: Boolean!
    message: String!
  }
`;
