import gql from "graphql-tag";

export default gql`
  type Mutation {
    deletePhoto(id: Int!, fileUrl: String): DeletePhotoResponse
  }
  type DeletePhotoResponse {
    code: Int!
    success: Boolean!
    message: String!
  }
`;
