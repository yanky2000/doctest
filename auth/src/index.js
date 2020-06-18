const express = require('express');
const { connectDb } = require('../helpers/db');
const app = express();
const { host, port, db } = require('../config')

app.get('/test', (req, res) => res.send('hello from express'))

const startServer = () => {
    app.listen(port, () => {
        console.log(`started auth server on port:${port}`);
        console.log(`started auth server on host:${host}`);
    })
}

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .on('open', startServer)



