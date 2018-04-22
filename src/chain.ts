import { Block, Genesis } from './block'

class Chain {

  private blocks: Block[]

  private isValidChain = (Blocks: Block[]) : boolean => {
    if (JSON.stringify(Blocks[0]) !== JSON.stringify(Genesis)) {
      return false
    }

    let blockBuffer = [Block[0]]

    for (let i = 1; i < Blocks.length; i++) {
      if(Blocks[i].isValid(blockBuffer[i - 1])) {
        blockBuffer.push(Blocks[i])
      } else {
        return false
      }
    }
    return true
  }

  public getDifficulty = (): number => this.blocks[this.blocks.length -1].difficulty
  public getHeight = (): number => this.blocks.length
  public getBlocks = (): Block[] => this.blocks

  public getLatestBlock = () : Block => {
    return this.blocks[this.blocks.length -1]
  }

  public addBlock = (block: Block) => {
    if(block.isValid(this.getLatestBlock())) {
      this.blocks.push(block)
    } else {
      throw "Chain - Invalid block"
    }
  }

  public replaceChain = (Blocks: Block[]) => {
    if(this.isValidChain(Blocks)) {
      this.blocks = Blocks
    }
  }

  constructor () {
    this.blocks = new Array<Block>()
    this.blocks.push(Genesis)
  }
}

export { Chain }