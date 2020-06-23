
const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");
const globalMiddleware = require("./middlewares/global");
const graphqlMiddleware = require("./middlewares/graphql");
const apiRoutes = require("./routes/api/file")
const connectToDB = require("./dbconnection/connect");

// global setups
app.use(globalMiddleware);
// routes
app.use(apiRoutes);
// graphql
app.use(graphqlMiddleware);
// error handling
app.use(errorMiddleware);
// connect to db
connectToDB( app );
