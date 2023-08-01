import gql from "graphql-tag";

export default gql`
  type Query {
    searchPhotos(keyword: String!): SearchPhotosResponse
  }

  type SearchPhotosResponse {
    code: Int!
    success: Boolean!
    message: String!
    photo: [Photo]
  }
`;
