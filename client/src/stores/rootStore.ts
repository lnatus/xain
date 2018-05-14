import { ChainStore } from "./chainStore";

export class RootStore {

  public chainStore: ChainStore

  constructor() {
    this.chainStore = new ChainStore(this)
  }
}