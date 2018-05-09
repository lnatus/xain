
import * as React from 'react'
import styled from 'styled-components'
import { theme } from '../common/theme'

export enum MessageType {
  Info,
  Success,
  Error
}

const MessageStyled = styled.div`
  white-space: pre-line;
  padding: ${ theme.space.s }
`

const MessageStyledInfo = MessageStyled.extend`
  background-color: ${ theme.palette.yellowlight }
  color: ${ theme.palette.yellow }
`

const MessageStyledSuccess = MessageStyled.extend`
  background-color: ${ theme.palette.greenlight };
  color: ${ theme.palette.green };
`

const MessageStyledError = MessageStyled.extend`
  background-color: ${ theme.palette.redlight }
  color: ${ theme.palette.red }
`

export interface IMessageActionProps {
  messageType: MessageType
  message: string
}

export class Message extends React.Component<IMessageActionProps> {
  public render() {
    const MessageComponent = this.getMessageComponent()
    return (
      <MessageComponent>
        { this.props.message }
      </MessageComponent>
    )
  }

  private getMessageComponent () {
    switch(this.props.messageType){
      case MessageType.Info:
        return MessageStyledInfo
      case MessageType.Success:
        return MessageStyledSuccess
      case MessageType.Error:
        return MessageStyledError
      default:
        return MessageStyledInfo
    }
  }
}