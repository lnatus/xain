import * as React from 'react'

import '../css/header.css'
import logo from '../images/xain.svg';

export default class Header extends React.Component {
  constructor(props :any) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <header className="xain-header">
        <img src={ logo } alt="XAIN" />
        <h1>Xain Explorer</h1>
      </header>
    )
  }
}
