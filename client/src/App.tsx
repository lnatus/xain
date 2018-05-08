import * as React from 'react'
import { Col, Grid, Row} from 'react-flexbox-grid'
import { Resources } from './common/shared'

import BlockList from './components/BlockList'
import Button from './components/Button'
import Card from './components/Card'
import Header from './components/Header'
import ImageLink from './components/ImageLink'
import ProgressBar from './components/ProgressBar'
import { ChainStore, ChainStoreState } from './stores/chainStore'

import { observer } from "mobx-react";
import octocat from './images/github.svg'

@observer
class App extends React.Component {

  private chainStore = new ChainStore()

  public componentDidMount() {
    this.chainStore.getBlocks()
  }

  public render() {
    const cs = this.chainStore
    return (
      <div>
        <Header />
        {
          cs.state === ChainStoreState.Busy && <ProgressBar />
        }
        <Grid fluid={true}>
          <Row>
            <Col xs={ 12 } md={ 12 } lg={ 8 }>
              <BlockList blocks={ cs.blocks } />
            </Col>
            <Col xs={ 12 } md={ 12 } lg={ 4 }>
              <Card>
                <Button disabled={ cs.state === ChainStoreState.Busy } onclick={ cs.mine } caption={'START MINING'} />
              </Card>
              <Card>
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
              </Card>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App;
