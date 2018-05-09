import * as React from 'react'
import styled from 'styled-components'
import { theme } from '../common/theme'

import Block from './Block'

const BlockListStyled = styled.ul`
  list-style: none;
  padding: ${ theme.space.zero };
  margin: ${ theme.space.s } ${ theme.space.zero };
`

export interface IBlockListProps {
  blocks: any[]
}
export default class BlockList extends React.Component<IBlockListProps> {

  public render() {
    return (
      <BlockListStyled>
        { this.props.blocks.slice().reverse().map(b => <Block key={ b.hash } block={ b } />) }
      </BlockListStyled>
    )
  }
}
