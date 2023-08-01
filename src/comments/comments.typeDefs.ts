import gql from "graphql-tag";

export default gql`
  type Comment {
    id: Int!
    user: User!
    photo: Photo!
    payload: String!
    isCommentMe: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`;
