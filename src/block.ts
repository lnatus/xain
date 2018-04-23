import * as Crypto from 'crypto-js'

 class Block {

  index: number
  parentHash: string
  timestamp: number
  data: string
  hash: string
  difficulty: number
  nonce: number

  public isValid = (parentBlock: Block) : boolean => {
    if (parentBlock.index + 1 !== this.index) {
      return false
    }

    if (parentBlock.hash !== this.parentHash) {
      return false
    }

    if (Block.calculateHash(this.index, this.parentHash, this.timestamp, this.data, this.difficulty, this.nonce) !== this.hash) {
      return false
    }

    return true
  }

  public static calculateHash = (index, parentHash, timestamp, data, difficulty, nonce) : string => {
    return Crypto.SHA256(`${index}${parentHash}${timestamp}${data}${difficulty}${nonce}`).toString()
  }

  constructor (index: number, parentHash: string, timestamp: number,
               data: string, hash: string, difficulty: number, nonce: number) {
    this.index = index
    this.parentHash = parentHash
    this.timestamp = timestamp
    this.data = data
    this.hash = hash
    this.difficulty = difficulty
    this.nonce = nonce
  }
}

const Genesis: Block = new Block (
  0,
  '0',
  new Date().getTime(),
  'Genesis Block',
  '89EB0AC031A63D2421CD05A2FBE41F3EA35F5C3712CA839CBF6B85C4EE07B7A3',
  1,
  0
);

export { Block, Genesis }