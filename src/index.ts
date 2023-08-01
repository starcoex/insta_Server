import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { json } from "body-parser";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers, typeDefs } from "./schema";
import { getUserFromReq } from "./util/user.util";
import { protectedResolver } from "./util/user.protect.Resover";
import prisma from "./script";
import http from "http";
import bodyParser from "body-parser";
// import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
import dynamicImport from "./util/upload.dynamicimport";
import { graphqlUploadExpress } from "graphql-upload-minimal";
import morgan from "morgan";
import starcoexFtp from "./util/starcoex.ftp";

const PORT = Number(process.env.PORT || 5000);
const app = express();
const httpServer = http.createServer(app);
app.use(morgan("tiny"));
app.use("/static", express.static("uploads"));
app.get("/uploads", (req, res) => {
  res.send("Hello");
});

async function startApolloServer() {
  const server = new ApolloServer({
    // schema: schema,
    typeDefs: typeDefs,
    resolvers: resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
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
      context: async ({ req, res }) => {
        // const { cache } = server;
        return {
          dataSources: {
            prisma: prisma,
            loginUser: await getUserFromReq(req.headers.token),
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
