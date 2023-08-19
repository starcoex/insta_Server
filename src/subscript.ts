import { PubSub } from "graphql-subscriptions";

export const pubsub = new PubSub();
const findUser = async (authToken) => {
  // Find a user by their auth token
};
const getDynamicContext = async (ctx, msg, args) => {
  // ctx is the graphql-ws Context where connectionParams live
  if (ctx.connectionParams.authentication) {
    const currentUser = await findUser(ctx.connectionParams.authentication);
    return { currentUser };
  }
  // Otherwise let our resolvers know we don't have a current user
  return { currentUser: null };
};
