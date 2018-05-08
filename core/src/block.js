"use strict";
const Crypto = require("crypto-js");
const config_1 = require("./config");
class Block {
    constructor(index, parentHash, timestamp, data, hash, difficulty, nonce) {
        this.isValid = (parentBlock) => {
            if (parentBlock.index + 1 !== this.index) {
                return false;
            }
            if (parentBlock.hash !== this.parentHash) {
                return false;
            }
            if (Block.calculateHash(this.index, this.parentHash, this.timestamp, this.data, this.difficulty, this.nonce) !== this.hash) {
                return false;
            }
            return true;
        };
        this.index = index;
        this.parentHash = parentHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
        this.difficulty = difficulty;
        this.nonce = nonce;
    }
}
Block.calculateHash = (index, parentHash, timestamp, data, difficulty, nonce) => {
    return Crypto.SHA256(`${index}${parentHash}${timestamp}${data}${difficulty}${nonce}`).toString();
};
exports.Block = Block;
const Genesis = new Block(0, '0', new Date().getTime(), 'Genesis Block', config_1.Config.genesisHash, config_1.Config.difficulty, 0);
exports.Genesis = Genesis;
