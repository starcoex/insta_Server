import gql from "graphql-tag";

export default gql`
  scalar Upload
  type UploadPhotoResponse {
    code: Int!
    success: Boolean!
    message: String!
    photo: Photo
  }
  type Mutation {
    uploadPhoto(file: Upload, caption: String): UploadPhotoResponse
    # uploadPhoto(file: Upload, caption: String): Photo
  }
`;
