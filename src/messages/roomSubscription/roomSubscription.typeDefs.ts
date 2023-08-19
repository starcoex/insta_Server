import gql from "graphql-tag";

export default gql`
  type Subscription {
    roomSubscription(id: Int!): Message
  }
`;
