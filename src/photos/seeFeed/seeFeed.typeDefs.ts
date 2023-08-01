import gql from "graphql-tag";

export default gql`
  type Query {
    seeFeed: SeeFeedResponse
  }
  type SeeFeedResponse {
    code: Int!
    success: Boolean!
    message: String!
    photo: [Photo]
  }
`;
