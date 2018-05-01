import * as hexToBinary from 'hex-to-binary'

import { Block, Genesis } from './block'

const DIFFICULTY_ADJUSTMENT_INTERVAL = 10

export type Stat = {
  height: number,
  difficulty: number,
  latestBlock: Block
}

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

  private isDifficultyAdjustment = () : boolean => !(this.blocks.length % 10)

  public getDifficulty = (): number => {
    const currentDifficulty = this.blocks[this.blocks.length -1].difficulty
    return this.isDifficultyAdjustment() ? currentDifficulty + 1 : currentDifficulty
  }
  public getHeight = (): number => this.blocks.length
  public getBlocks = (): Block[] => this.blocks
  public getCurrentDifficulty = (): number => this.blocks[this.blocks.length -1].difficulty

  public getLatestBlock = () : Block => {
    return this.blocks[this.blocks.length -1]
  }

  public getStats = (): Stat => {
    return {
      height: this.getHeight(),
      difficulty: this.getCurrentDifficulty(),
      latestBlock: this.getLatestBlock()
    }
  }

  public addBlock = (block: Block) => {
    if(block.isValid(this.getLatestBlock()) && this.hashMatch(block.hash)) {
      this.blocks.push(block)
    } else {
      throw "Chain - Invalid block"
    }
  }

  public hashMatch = (hash: string) => {
    const hashInBinary: string = hexToBinary(hash)
    const requiredPrefix: string = '0'.repeat(this.getDifficulty())
    return hashInBinary.startsWith(requiredPrefix)
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