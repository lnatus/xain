import { action, observable, runInAction } from 'mobx'

import { Endpoints, Messages } from '../common/shared'
import { RootStore } from './rootStore';

export enum BlockStoreState {
  Idle,
  Busy,
  Error
}

export class BlockStore {
  @observable public blocks = [] as any
  @observable public state = BlockStoreState.Idle
  @observable public stateMessage = ''

  public rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  public async getBlocks() {
    this.blocks = []
    this.state = BlockStoreState.Busy
    try {
      const response = await fetch(Endpoints.blocks)
      const body = await response.json()

      runInAction(() => {
          this.state = BlockStoreState.Idle
          this.blocks = body.blocks
      })
    } catch (error) {
        runInAction(() => {
          this.state = BlockStoreState.Error
          this.stateMessage = `${ Messages.defaultError } \n Details: ${ error }`
        })
    }
  }

  @action.bound
  public async mine() {
    this.state = BlockStoreState.Busy
    try {
      const response = await fetch(Endpoints.mine)
      const body = await response.json()

      runInAction(() => {
        this.state = BlockStoreState.Idle
        this.blocks = [...this.blocks, body as never]
      })
    } catch(error) {
      runInAction(() => {
        this.state = BlockStoreState.Error
        this.stateMessage = `${ Messages.defaultError } \n Details: ${ error }`
      })
    }
  }
}