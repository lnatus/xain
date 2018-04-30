import * as React from 'react'
import styled from 'styled-components'

import Block from './Block'

const BlockListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0;
`

export interface IBlockListProps {
  blocks: any[]
}
export default class BlockList extends React.Component<IBlockListProps> {
  constructor(props :any) {
    super(props)
  }

  public render() {
    return (
      <BlockListStyled>
        { this.props.blocks.slice().reverse().map(b => <Block key={ b.hash } block={ b } />) }
      </BlockListStyled>
    )
  }
}
