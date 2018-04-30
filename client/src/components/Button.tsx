import * as React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  text-align: center;
  padding: 15px;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 1px 4px -1px rgba(0,0,0,0.50);
  color: ${props => props.disabled ? '#AAA' : '#FFF'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  background: ${props => props.disabled ? '#EFEFEF' : 'linear-gradient(-225deg, #699AFA 0%, #8A51FF 100%);'};
`
export interface IButtonActionProps {
  onclick: any,
  disabled: boolean,
  caption: any
}

export default class Button extends React.Component<IButtonActionProps> {
  public render() {
    return (
      <ButtonStyled className="xain-button" disabled={ this.props.disabled } onClick={ this.props.onclick }>
        { this.props.caption }
      </ButtonStyled>
    )
  }
}