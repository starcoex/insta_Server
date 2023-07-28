import { PrismaClient } from "@prisma/client";
import { Resolver, ResolversParentTypes, User } from "./__generates__/types";
import prisma from "./script";

export type DataSourceContext = {
  dataSources: {
    loginUser?: User;
    prisma: PrismaClient;
    userProtectResolver: ResolversParentTypes;
  };
};
