"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const chain_1 = require("./chain");
const worker_1 = require("./worker");
class App {
}
App.run = () => {
    const app = express();
    const port = 8080;
    const router = express.Router();
    const chain = new chain_1.Chain();
    const worker = new worker_1.Worker(chain);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    router.get('/blocks', (req, res) => {
        const blocks = chain.getBlocks();
        res.json({ blocks: blocks });
    });
    router.post('/mine', (req, res) => {
        const block = worker.findBlock('TRANSACTION-PLACEHOLDER-DATA');
        chain.addBlock(block);
        res.send();
    });
    app.use('/api', router);
    app.listen(port, () => console.log(`App running on port ${port}`));
};
App.run();
