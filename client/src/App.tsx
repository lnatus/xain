import * as React from 'react'
import { Col, Grid, Row} from 'react-flexbox-grid'

import BlockList from './components/BlockList'
import Button from './components/Button'
import Card from './components/Card'
import GitHub from './components/GitHub'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
import { ChainStore, ChainStoreState } from './stores/chainStore'

import { observer } from "mobx-react";

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
                <GitHub />
              </Card>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App;
