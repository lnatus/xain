import { action, observable } from 'mobx'
import { Chain, Worker } from 'xaincore'

import {  Messages } from '../common/shared'
import { RootStore } from './rootStore';

export enum ChainStoreState {
  Idle,
  Busy,
  Error
}

export class ChainStore {
  @observable public blocks = [] as any
  @observable public state = ChainStoreState.Idle
  @observable public stateMessage = ''

  public rootStore: RootStore

  private chain: any
  private worker: any

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.chain = new Chain()
    this.worker = new Worker(this.chain)
  }

  @action
  public getBlocks() {
    this.blocks = []
    this.state = ChainStoreState.Busy
    try {
      this.blocks = this.chain.getBlocks()
      this.state = ChainStoreState.Idle
    }
    catch (error) {
      this.state = ChainStoreState.Error
      this.stateMessage = `${ Messages.defaultError } \n Details: ${ error }`
    }
  }

  @action.bound
  public mine() {
    try {
      this.state = ChainStoreState.Busy
      this.worker.findBlock('TRANSACTION-PLACEHOLDER-DATA')
      this.blocks = this.chain.getBlocks()
      this.state = ChainStoreState.Idle
    }
    catch(error) {
      this.state = ChainStoreState.Error
      this.stateMessage = `${ Messages.defaultError } \n Details: ${ error }`
    }
  }
}