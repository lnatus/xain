import * as React from 'react'
import { Col, Grid, Row} from 'react-flexbox-grid'

import BlockList from './components/BlockList'
import Button from './components/Button'
import Card from './components/Card'
import GitHub from './components/GitHub'
import Header from './components/Header'
import { MessageType, Message } from './components/Message'
import ProgressBar from './components/ProgressBar'
import { ChainStoreState,  ChainStore } from './stores/chainStore'

import { observer, inject } from "mobx-react";

export interface IAppProps {
  chainStore?: ChainStore
}

@inject('chainStore')
@observer
class App extends React.Component<IAppProps> {
  public render() {
    const { chainStore } = this.props
    return (
      <div>
        <Header />
        {
          chainStore.state === ChainStoreState.Busy && <ProgressBar />
        }
        <Grid fluid={ true }>
          <Row>
            <Col xs={ 12 } md={ 12 } lg={ 8 }>
              <BlockList blocks={ chainStore.blocks } />
            </Col>
            <Col xs={ 12 } md={ 12 } lg={ 4 }>
              <Card>
                <h3>Current Xain Difficulty: { chainStore.difficulty } </h3>
                <Button disabled={ chainStore.state === ChainStoreState.Busy } onclick={ chainStore.mine } caption={'START MINING'} />
              </Card>
              <Card>
                <GitHub />
              </Card>
              {
                chainStore.state === ChainStoreState.Error &&
                <Message messageType={ MessageType.Error } message={ chainStore.stateMessage } />
              }
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App;
