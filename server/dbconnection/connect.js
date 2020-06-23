
const mongoose = require("mongoose");
const keys = require("../config/keys");

const connect = ( app ) => {
    const PORT = 2020;

    mongoose.connect(keys.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
    const connection = mongoose.connection;
    connection.on("error", console.error.bind(console, "Connection to DB failed"));
    connection.once("open", () => {
        app.listen(PORT, () => {
            console.log(`app running at https://localhost:${PORT}`)
        });
    });
}

module.exports = connect;