
import * as React from 'react'
import styled from 'styled-components'

export enum MessageType {
  Info,
  Success,
  Error
}

const MessageStyled = styled.div`
`

export interface IMessageActionProps {
  messageType: MessageType
}

export default class Message extends React.Component<IMessageActionProps> {
  public render() {
    return (
      <MessageStyled />
    )
  }
}