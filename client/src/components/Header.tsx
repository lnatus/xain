import * as React from 'react'
import styled from 'styled-components'
import { theme } from '../common/theme'
import { spin } from '../common/keyframes'

import logo from '../images/xain.svg';

const HeaderStyled = styled.header`
  text-align: center;
  background-color: ${ theme.palette.black };
  padding: ${ theme.space.s };
  color: ${ theme.palette.white };
`

const Logo = styled.img`
  height: 80px;
  animation: ${ spin } infinite 20s linear;
`

export default class Header extends React.Component {

  public render() {
    return (
      <HeaderStyled>
        <Logo src={ logo } alt="XAIN" />
        <h1>XAIN</h1>
        <p>Xperimental JavaScript Blockchain</p>
      </HeaderStyled>
    )
  }
}
