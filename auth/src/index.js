const express = require("express");
const { connectDb } = require("../helpers/db");
const app = express();
const { host, port, db, authApiUrl } = require("../config");

app.get("/test", (req, res) => res.send("hello from express"));

const startServer = () => {
    app.listen(port, () => {
        console.log(`started auth server on port:${port}`);
        console.log(`started auth server on host:${host}`);
    });
};

app.get("/api/currentUser", (req, res) => {
    res.json({ id: "13asdfasdf24", email: "hgg@mail.com" });
});



connectDb()
    .on("error", console.log)
    .on("disconnected", connectDb)
    .on("open", startServer);
