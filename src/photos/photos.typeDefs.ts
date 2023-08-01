import gql from "graphql-tag";

export default gql`
  type Photo {
    id: Int!
    user: User!
    file: String!
    caption: String
    createdAt: DateTime!
    updatedAt: DateTime!
    hashtag: [Hashtag]
    likesNumber: Int!
    commentsNumber: Int!
    isCommentMe: Boolean!
  }

  type Hashtag {
    id: Int!
    photos(page: Int!): [Photo]
    hashtag: String!
    totalPhotos: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  type Like {
    id: Int!
    # user: User!
    photo: Photo!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`;
