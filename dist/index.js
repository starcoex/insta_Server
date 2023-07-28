import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { typeDefs } from "./schema";
import { getUserFromReq } from "./util/user.util";
import { protectedResolver } from "./util/user.protect.Resover";
import prisma from "./script";
import http from "http";
import bodyParser from "body-parser";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
import { resolvers } from "./schema";
const PORT = Number(process.env.PORT);
const app = express();
const httpServer = http.createServer(app);
async function startApolloServer() {
    const server = new ApolloServer({
        // schema: schema,
        typeDefs: typeDefs,
        resolvers: resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();
    app.use("/graphql", cors({
        origin: true,
        credentials: true,
    }), bodyParser.json(), graphqlUploadExpress(), expressMiddleware(server, {
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
    }));
    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
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
startApolloServer();
