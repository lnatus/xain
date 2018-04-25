import * as React from 'react'

import '../css/button.css'

export interface IButtonActionProps {
  onclick: any,
  disabled: boolean,
  caption: any
}

export default class Button extends React.Component<IButtonActionProps> {
  public render() {
    return (
      <button className="xain-button" disabled={ this.props.disabled } onClick={ this.props.onclick }>
        { this.props.caption }
      </button>
    )
  }
}