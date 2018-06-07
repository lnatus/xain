declare class Block {
    index: number;
    parentHash: string;
    timestamp: number;
    data: string;
    hash: string;
    difficulty: number;
    nonce: number;
    isValid: (parentBlock: Block) => boolean;
    static calculateHash: (index: any, parentHash: any, timestamp: any, data: any, difficulty: any, nonce: any) => string;
    constructor(index: number, parentHash: string, timestamp: number, data: string, hash: string, difficulty: number, nonce: number);
}
declare const Genesis: Block;
export { Block, Genesis };
