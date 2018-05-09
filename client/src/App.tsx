import * as React from 'react'
import { Col, Grid, Row} from 'react-flexbox-grid'

import BlockList from './components/BlockList'
import Button from './components/Button'
import Card from './components/Card'
import GitHub from './components/GitHub'
import Header from './components/Header'
import { MessageType, Message } from './components/Message'
import ProgressBar from './components/ProgressBar'
import { BlockStore, BlockStoreState } from './stores/blockStore'

import { observer, inject } from "mobx-react";

export interface IAppProps {
  blockStore?: BlockStore
}

@inject('blockStore')
@observer
class App extends React.Component<IAppProps> {

  public render() {
    const { blockStore } = this.props
    return (
      <div>
        <Header />
        {
          blockStore.state === BlockStoreState.Busy && <ProgressBar />
        }
        <Grid fluid={ true }>
          <Row>
            <Col xs={ 12 } md={ 12 } lg={ 8 }>
              <BlockList blocks={ blockStore.blocks } />
            </Col>
            <Col xs={ 12 } md={ 12 } lg={ 4 }>
              <Card>
                <Button disabled={ blockStore.state === BlockStoreState.Busy } onclick={ blockStore.mine } caption={'START MINING'} />
              </Card>
              <Card>
                <GitHub />
              </Card>
              {
                blockStore.state === BlockStoreState.Error &&
                <Message messageType={ MessageType.Error } message={ blockStore.stateMessage } />
              }
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App;
