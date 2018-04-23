import { Chain } from './chain'
import { Block } from './block'

class Worker {

  chain : Chain

  public findBlock = (data: string) => {
    const parentBlock = this.chain.getLatestBlock()
    const index = parentBlock.index + 1;
    const timestamp = new Date().getTime()
    const difficulty = this.chain.getDifficulty()
    let nonce = 0;

    while (true) {
      const hash = Block.calculateHash(index, parentBlock.hash, timestamp, data, difficulty, nonce);
      if (this.chain.hashMatch(hash)) {
          return new Block(index, parentBlock.hash, timestamp, data, hash, difficulty, nonce);
      }
      nonce++;
    }
  }

  constructor(chain: Chain) {
    this.chain = chain
  }
}

export { Worker }