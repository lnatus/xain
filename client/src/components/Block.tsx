import * as React from 'react'
import Moment from 'react-moment'

import { Col, Row} from 'react-flexbox-grid'
import '../css/block.css'

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
      <li className={'xain-block ' + (!block.index ? 'xain-genesis' : '') }>
        <Row>
          <Col xs={12} md={12} lg={1}>
            <div className="xain-block-index">
              { block.index }
            </div>
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
      </li>
    )
  }
}
