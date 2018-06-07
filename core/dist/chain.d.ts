import { Block } from './block';
export declare type Stat = {
    height: number;
    difficulty: number;
    latestBlock: Block;
};
declare class Chain {
    private blocks;
    private isValidChain;
    private isDifficultyAdjustment;
    getDifficulty: () => number;
    getHeight: () => number;
    getBlocks: () => Block[];
    getCurrentDifficulty: () => number;
    getLatestBlock: () => Block;
    getStats: () => Stat;
    addBlock: (block: Block) => void;
    hashMatch: (hash: string) => boolean;
    replaceChain: (Blocks: Block[]) => void;
    constructor();
}
export { Chain };
