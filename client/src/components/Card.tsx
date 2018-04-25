import * as React from 'react'

import '../css/card.css'

export default class Card extends React.Component {

  public render () {
    const { children } = this.props
    return (
      <div className="xain-card">
        { children }
      </div>
    )
  }
}