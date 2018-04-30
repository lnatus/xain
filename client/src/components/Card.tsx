import * as React from 'react'
import styled from 'styled-components'

const CardStyled = styled.div`
  padding: 15px;
  margin: 15px 0;
  box-shadow: 0 1px 4px -1px rgba(0,0,0,0.50);
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