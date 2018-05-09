import * as React from 'react'
import styled from 'styled-components'
import { theme } from '../common/theme'

const ButtonStyled = styled.button`
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  padding: ${ theme.space.s };
  box-shadow: ${ theme.palette.shadow };
  color: ${props => props.disabled ? theme.palette.gray  :  theme.palette.white };
  background: ${props => props.disabled ? theme.palette.graylight : theme.palette.gradient };
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