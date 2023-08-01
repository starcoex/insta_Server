import gql from "graphql-tag";

export default gql`
  type SeePhotoResponse {
    code: Int!
    success: Boolean!
    message: String!
    photo: Photo
  }

  type Query {
    seePhoto(id: Int!): Photo
  }
`;
