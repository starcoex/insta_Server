import { PrismaClient, User } from "@prisma/client";

type Context = {
  dataSources: {
    loginUser?: User;
    prisma: PrismaClient;
  };
};

export type ResolverProtected = (
  parent: any,
  args: any,
  context: Context,
  info: any
) => any;

export type ResolversProtected = {
  [key: string]: {
    [key: string]: ResolverProtected;
  };
};
