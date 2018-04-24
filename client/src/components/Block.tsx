import * as React from 'react'
import Moment from 'react-moment'

import '../css/block.css'


export interface IBlock {
  block: any
}
export default class Block extends React.Component<IBlock> {
  constructor(props :any) {
    super(props)
  }

  public render() {
    const block = this.props.block
    return (
      <li className="xain-block">
        <div>
          Index: { block.index }
        </div>
        <div>
         Hash: { block.hash }
        </div>
        <div>
          Parent: { block.parentHash }
        </div>
        <Moment format="DD.MM.YYYY HH:mm:ss">
          { block.timestamp }
        </Moment>
      </li>
    )
  }
}
