// import gql from "graphql-tag";
const typeDefs = `#graphql

  scalar Upload
  type Mutation {
    editProfileUser(
      firstname: String
      lastname: String
      username: String
      email: String
      password: String
      bio: String
      avatar: Upload
    ): EditProfileResponse
  }
  type EditProfileResponse {
    code: Int!
    success: Boolean!
    message: String!
    token: String
    user: User
  }
`;
export default typeDefs;
