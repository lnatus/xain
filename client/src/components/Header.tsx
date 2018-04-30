import * as React from 'react'
import styled from 'styled-components'

import logo from '../images/xain.svg';

const HeaderStyled = styled.header`
  background-color: #222;
  padding: 20px;
  color: white;
  text-align: center;
`

const Logo = styled.img`
  --webkit-animation: xain-spin infinite 20s linear;
  animation: xain-spin infinite 20s linear;
  height: 80px;

  @keyframes xain-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

export default class Header extends React.Component {
  constructor(props :any) {
    super(props);
    this.state = {
    };
  }

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
