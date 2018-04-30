import * as React from 'react'

import '../css/blocklist.css'
import Block from './Block'

export interface IBlockListProps {
  blocks: any[]
}
export default class BlockList extends React.Component<IBlockListProps> {
  constructor(props :any) {
    super(props)
  }

  public render() {
    return (
      <ul className="xain-block-list">
        { this.props.blocks.slice().reverse().map(b => <Block key={ b.hash } block={ b } />) }
      </ul>
    )
  }
}
