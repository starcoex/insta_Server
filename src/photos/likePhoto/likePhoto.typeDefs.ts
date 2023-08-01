import gql from "graphql-tag";

export default gql`
  type Mutation {
    likePhoto(id: Int!): LikePhotoResponse
    toggleLike(id: Int!): ToggleLikeResponse
  }
  type LikePhotoResponse {
    code: Int!
    success: Boolean!
    message: String!
    # like: Like!
  }
  type ToggleLikeResponse {
    code: Int!
    success: Boolean!
    message: String!
    # like: Like!
  }
`;
