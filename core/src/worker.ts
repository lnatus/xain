import { Chain } from './chain'
import { Block } from './block'

class Worker {

  readonly chain : Chain

  public findBlock = async (data: string) => {
    const parentBlock = this.chain.getLatestBlock()
    const index = parentBlock.index + 1;
    const timestamp = new Date().getTime()
    const difficulty = this.chain.getDifficulty()
    let nonce = 0;

    while (true) {
      const hash = Block.calculateHash(index, parentBlock.hash, timestamp, data, difficulty, nonce)
      if (this.chain.hashMatch(hash)) {
          const block = new Block(index, parentBlock.hash, timestamp, data, hash, difficulty, nonce)
          this.chain.addBlock(block)
          return block
      }
      nonce++;
    }
  }

  constructor(chain: Chain) {
    this.chain = chain
  }
}

export { Worker }