import gql from "graphql-tag";

export default gql`
  type Mutation {
    editPhoto(id: Int!, caption: String!): EditPhotoResponse
  }
  type EditPhotoResponse {
    code: Int!
    success: Boolean!
    message: String!
    photo: Photo!
  }
`;
