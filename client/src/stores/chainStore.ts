import { action, observable, runInAction } from 'mobx'

import { Block, Chain, Worker } from 'xaincore'

import {  Messages } from '../common/shared'
import { RootStore } from './rootStore';

export enum ChainStoreState {
  Idle,
  Busy,
  Error
}

export class ChainStore {
  @observable public blocks = [] as Block[]
  @observable public state = ChainStoreState.Idle
  @observable public stateMessage = ''

  public rootStore: RootStore

  private chain: Chain
  private worker: Worker

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
  public async mine() {
    try {
      this.state = ChainStoreState.Busy
      runInAction(
        'mine:success', () => {
          this.worker.findBlock('TRANSACTION-PLACEHOLDER-DATA')
          this.blocks = this.chain.getBlocks()
        }
      )
      this.state = ChainStoreState.Idle

    }
    catch(error) {
      runInAction(
        'min:error', () => {
          this.state = ChainStoreState.Error
          this.stateMessage = `${ Messages.defaultError } \n Details: ${ error }`
        }
      )
    }
  }
}