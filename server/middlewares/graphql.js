const router = require("express").Router();
const graphqlResolver = require("../graphql/resolvers");
const graphqlSchema = require("../graphql/schema");
const graphqlHttp = require("express-graphql");

router.use("/graphql", graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    customFormatErrorFn(err) {
        if(!err.originalError) {
            return err;
        }
        return {
            message: err.originalError.message,
            status: err.originalError.status,
            data: err.originalError.data
        }
    }
}));

module.exports = router;