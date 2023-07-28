// import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";
// export const typeDefs = gql`
//   type Query {
//     movie(id: Int!): Movie
//     movies: [Movie]
//   }
//   type Mutation {
//     createMovie(title: String!, year: Int!, genre: String): Movie
//     deleteMovie(id: Int!): Movie
//     updateMovie(id: Int!, year: Int!): Movie
//   }
//   type Movie {
//     id: Int!
//     title: String!
//     year: Int!
//     genre: String
//     createdAt: String!
//     updatedAt: String!
//   }
// `;
// import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { fileURLToPath } from "url";
import { loadFiles } from "@graphql-tools/load-files";
// const typeDefs = loadSchemaSync(`${__dirname}/**/*.typeDefs.ts`, {
//   loaders: [new GraphQLFileLoader()],
// });
const __filenaem = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filenaem);
const typeDefsArray = await loadFiles(`${__dirname}/**/*.typeDefs.ts`, {
    ignoreIndex: true,
});
const resolversArray = await loadFiles(`${__dirname}/**/*.resolvers.ts`, {
    ignoreIndex: true,
});
console.log(resolversArray);
const typesArray = loadFilesSync(path.join(__dirname, "/**/*.typeDefs.ts"));
const resoversArray = loadFilesSync(path.join(__dirname, "/**/*.{mutation,queries}.ts"));
export const typeDefs = mergeTypeDefs(typeDefsArray);
export const resolvers = mergeResolvers(resolversArray);
export const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
