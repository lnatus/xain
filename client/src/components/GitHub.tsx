import * as React from 'react'
import { Col, Row } from 'react-flexbox-grid'
import { Resources } from '../common/shared'

import ImageLink from '../components/ImageLink'

import octocat from '../images/octocat.svg'

export default class GitHub extends React.Component {

  public render() {
    return(
      <Row>
        <Col xs={ 12 } md={ 12 } lg={ 3 }>
          <ImageLink src={ octocat } href={ Resources.github } width={ 100 } alt="GitHub XAIN - Xperimental JavaScript Blockchain" />
        </Col>
        <Col xs={ 12 } md={ 12 } lg={ 9 }>
          <p>
            <span>Watch this project on </span>
            <a href={ Resources.github }>GitHub</a>
          </p>
          <small>
            <a href= { Resources.readme }>Documentation</a>
          </small>
        </Col>
      </Row>
    )
  }
}