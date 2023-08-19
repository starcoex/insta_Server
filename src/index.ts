import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { json } from "body-parser";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema, { resolvers, typeDefs } from "./schema";
import { getUserFromReq } from "./util/user.util";
import { protectedResolver } from "./util/user.protect.Resover";
import prisma from "./script";
import http from "http";
import bodyParser from "body-parser";
import { graphqlUploadExpress } from "graphql-upload-minimal";
import morgan from "morgan";
import { WebSocketServer } from "ws";
import { Extra, useServer } from "graphql-ws/lib/use/ws";
import { ExecutionArgs } from "graphql";
import { Context, SubscribeMessage } from "graphql-ws";
import { pubsub } from "./subscript";
import { error } from "console";

const PORT = Number(process.env.PORT || 5000);
const app = express();
const httpServer = http.createServer(app);
app.use(morgan("tiny"));
app.use("/static", express.static("uploads"));

const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});
const findUser = async (authToken) => {
  // Find a user by their auth token
  return await getUserFromReq(authToken);
};
const getDynamicContext = async (ctx, msg, args) => {
  // ctx is the graphql-ws Context where connectionParams live
  if (ctx.connectionParams.token) {
    const currentUser = await findUser(ctx.connectionParams.token);
    return { currentUser };
  }
  // Otherwise let our resolvers know we don't have a current user
  return { currentUser: null };
};

const serverCleanup = useServer(
  {
    schema,
    onConnect: async (ctx) => {
      const {
        connectionParams: { token },
      } = ctx;
      if (!token) {
        throw new error("Auth token missing!");
      }
    },
    onDisconnect(ctx, code, reason) {
      console.log("Disconnected!");
    },
    context: async (ctx, msg, args) => {
      return getDynamicContext(ctx, msg, args);
    },
  },
  wsServer
);
async function startApolloServer() {
  const server = new ApolloServer({
    schema: schema,
    // typeDefs: typeDefs,
    // resolvers: resolvers,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],

    formatError: (err) => {
      console.log(err);
      return err;
    },
    csrfPrevention: false,
  });
  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>({
      origin: true,
      // origin: [
      //   "https://www.your-app.example",
      //   "https://studio.apollographql.com",
      // ],
      credentials: true,
    }),
    bodyParser.json(),
    graphqlUploadExpress(),
    expressMiddleware(server, {
      context: async (ctx) => {
        // console.log(ctx.req.headers.token);
        // const { cache } = server;
        return {
          dataSources: {
            prisma: prisma,
            // loginUser: await getUserFromReq(req.headers.token),
            loginUser: await getUserFromReq(ctx.req.headers.token),
            userProtectResolver: protectedResolver,
          },
        };
      },
    })
  );
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(` 🚀  Server is running!
//   📭  Query at http://localhost:${PORT}/graphql`);
}
// await new Promise<void>((resolve)=>httpServer.listen({port:PORT}, resolve))
//   const { url } = await startStandaloneServer(server, {
//     listen: {
//       port: PORT,
//     },
//     context: async ({ req, res }) => {
//       const { cache } = server;
//       return {
//         dataSources: {
//           prisma: prisma,
//           loginUser: await getUserFromReq(req.headers.token),
//           userProtectResolver: protectedResolver,
//         },
//       };
//     },
//   });
//   console.log(` 🚀  Server is running!
//   📭  Query at ${url}`);
// }
// starcoexFtp.connect({
//   host: "112.184.55.52",
//   user: "starcoex",
//   password: "Coex2023^^",
//   port: 21,
//   secure: false,
// });
// starcoexFtp.connect();

startApolloServer();
