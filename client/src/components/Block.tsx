import * as React from 'react'
import Moment from 'react-moment'
import styled from 'styled-components'

import { Col, Row} from 'react-flexbox-grid'

const BlockStyled = styled.li`
  padding: 15px;
  margin-bottom: 15px;

  background: #FFFFFF;
  box-shadow: 0 1px 4px -1px rgba(0,0,0,0.50);

  small {
    margin-top: 20px;
    font-size: 10px;
    float: right;
  }

  &.xain-genesis {
    background: linear-gradient(-217deg, #67A0FA 2%, #8A51FF 96%);
    color: #FFF;
  }
`

const IndexStyled = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  line-height: 60px;
  color: #FFF;
  text-align: center;
  background: linear-gradient(-217deg, #67A0FA 2%, #8A51FF 96%);
  box-shadow: 0 1px 4px -1px rgba(0,0,0,0.50);

  &.xain-genesis {
    background: #FFF;
    color: #8A51FF;
  }
`

export interface IBlock {
  block: any
}

export default class Block extends React.Component<IBlock> {
  constructor(props :any) {
    super(props)
  }

  public render() {
    const block = this.props.block
    return (
      <BlockStyled className={(!block.index ? 'xain-genesis' : '')}>
        <Row>
          <Col xs={12} md={12} lg={1}>
            <IndexStyled className={(!block.index ? 'xain-genesis' : '')}>
              { block.index }
            </IndexStyled>
          </Col>
          <Col xs={12} md={12} lg={11}>
          <div>
            <b>HASH: </b>
            { block.hash }
          </div>
          <div>
           <b>PARENT: </b>
           { block.parentHash }
          </div>
          <Moment format="DD.MM.YYYY HH:mm:ss">
            { block.timestamp }
          </Moment>
          { !block.index  &&
            <small>
              GENESIS BLOCK
            </small>
          }
         </Col>
        </Row>
      </BlockStyled>
    )
  }
}
