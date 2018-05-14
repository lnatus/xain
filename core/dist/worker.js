"use strict";
const block_1 = require("./block");
class Worker {
    constructor(chain) {
        this.findBlock = (data) => {
            const parentBlock = this.chain.getLatestBlock();
            const index = parentBlock.index + 1;
            const timestamp = new Date().getTime();
            const difficulty = this.chain.getDifficulty();
            let nonce = 0;
            while (true) {
                const hash = block_1.Block.calculateHash(index, parentBlock.hash, timestamp, data, difficulty, nonce);
                if (this.chain.hashMatch(hash)) {
                    const block = new block_1.Block(index, parentBlock.hash, timestamp, data, hash, difficulty, nonce);
                    this.chain.addBlock(block);
                    return block;
                }
                nonce++;
            }
        };
        this.chain = chain;
    }
}
exports.Worker = Worker;
