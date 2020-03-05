const express = require("express");
const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");
const { ApolloServer } = require("apollo-server-express");
require('dotenv/config')
const cors = require("cors");

const server = new ApolloServer({
	typeDefs,
	resolvers
});

const app = express();

var corsOptions = {
	origin: "http://localhost:3000",
	credentials: true
};
app.use(cors(corsOptions));

server.applyMiddleware({ app });

app.listen({ port: 3010 }, () =>
	console.log(`Server ready at http://localhost:3010${server.graphqlPath}`)
);
