import * as React from 'react'

export interface IImageLink {
  href: string,
  src: string,
  width: number,
  alt: string
}

export default class ImageLink extends React.Component<IImageLink> {
  public render () {
    return (
      <a href={ this.props.href }>
        <img src={ this.props.src } width={ this.props.width } alt={ this.props.alt } />
      </a>
    )
  }
}