import * as React from 'react'
import styled from 'styled-components'
import { theme } from '../common/theme'

const CardStyled = styled.div`
  padding: ${ theme.space.s };
  margin: ${ theme.space.s } ${ theme.space.zero };
  box-shadow: ${ theme.palette.shadow };
`

export default class Card extends React.Component {

  public render () {
    const { children } = this.props
    return (
      <CardStyled className="xain-card">
        { children }
      </CardStyled>
    )
  }
}