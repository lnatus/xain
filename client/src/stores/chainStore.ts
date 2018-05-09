import { action, observable, runInAction } from 'mobx'

import { Endpoints, Messages } from '../common/shared'
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

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  public async getBlocks() {
    this.blocks = []
    this.state = ChainStoreState.Busy
    try {
      const response = await fetch(Endpoints.blocks)
      const body = await response.json()

      runInAction(() => {
          this.state = ChainStoreState.Idle
          this.blocks = body.blocks
      })
    } catch (error) {
        runInAction(() => {
          this.state = ChainStoreState.Error
          this.stateMessage = `${ Messages.defaultError } \n Details: ${ error }`
        })
    }
  }

  @action.bound
  public async mine() {
    this.state = ChainStoreState.Busy
    try {
      const response = await fetch(Endpoints.mine)
      const body = await response.json()

      runInAction(() => {
        this.state = ChainStoreState.Idle
        this.blocks = [...this.blocks, body as never]
      })
    } catch(error) {
      runInAction(() => {
        this.state = ChainStoreState.Error
        this.stateMessage = `${ Messages.defaultError } \n Details: ${ error }`
      })
    }
  }
}