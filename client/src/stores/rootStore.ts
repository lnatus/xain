import { BlockStore } from "./blockStore";

export class RootStore {

  public blockStore: BlockStore

  constructor() {
    this.blockStore = new BlockStore(this)
  }
}