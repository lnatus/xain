"use strict";
const _ = require("lodash");
const hexToBinary = require("hex-to-binary");
const block_1 = require("./block");
const DIFFICULTY_ADJUSTMENT_INTERVAL = 10;
class Chain {
    constructor() {
        this.isValidChain = (Blocks) => {
            if (JSON.stringify(Blocks[0]) !== JSON.stringify(block_1.Genesis)) {
                return false;
            }
            let blockBuffer = [block_1.Block[0]];
            for (let i = 1; i < Blocks.length; i++) {
                if (Blocks[i].isValid(blockBuffer[i - 1])) {
                    blockBuffer.push(Blocks[i]);
                }
                else {
                    return false;
                }
            }
            return true;
        };
        this.isDifficultyAdjustment = () => !(this.blocks.length % 10);
        this.getDifficulty = () => {
            const currentDifficulty = this.blocks[this.blocks.length - 1].difficulty;
            return this.isDifficultyAdjustment() ? currentDifficulty + 1 : currentDifficulty;
        };
        this.getHeight = () => this.blocks.length;
        this.getBlocks = () => _.reverse(this.blocks);
        this.getCurrentDifficulty = () => this.blocks[this.blocks.length - 1].difficulty;
        this.getLatestBlock = () => {
            return this.blocks[this.blocks.length - 1];
        };
        this.addBlock = (block) => {
            if (block.isValid(this.getLatestBlock()) && this.hashMatch(block.hash)) {
                this.blocks.push(block);
            }
            else {
                throw "Chain - Invalid block";
            }
        };
        this.hashMatch = (hash) => {
            const hashInBinary = hexToBinary(hash);
            const requiredPrefix = '0'.repeat(this.getDifficulty());
            return hashInBinary.startsWith(requiredPrefix);
        };
        this.replaceChain = (Blocks) => {
            if (this.isValidChain(Blocks)) {
                this.blocks = Blocks;
            }
        };
        this.blocks = new Array();
        this.blocks.push(block_1.Genesis);
    }
}
exports.Chain = Chain;
