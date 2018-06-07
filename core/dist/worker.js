"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const block_1 = require("./block");
class Worker {
    constructor(chain) {
        this.findBlock = (data) => __awaiter(this, void 0, void 0, function* () {
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
        });
        this.chain = chain;
    }
}
exports.Worker = Worker;
