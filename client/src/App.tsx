import * as React from 'react'
import { Col, Grid, Row} from 'react-flexbox-grid'
import { Endpoints } from './common/shared'

import BlockList from './components/BlockList'
import Button from './components/Button'
import Card from './components/Card'
import Header from './components/Header'

class App extends React.Component {
  public state = {
    blocks: [],
    isBusy: false
  }

  public componentDidMount() {
    this.setState({ isBusy: true })
    this.get(Endpoints.blocks).then(res => this.setState({
      blocks: res.blocks,
      isBusy: false
    }))
  }

  public render() {
    const blocks = this.state.blocks
    const isBusy = this.state.isBusy
    return (
      <div>
        <Header />
        <Grid fluid={true}>
          <Row>
            <Col xs={ 12 } md={ 12 } lg={ 8 }>
              <BlockList blocks={ blocks } />
            </Col>
            <Col xs={ 12 } md={ 12 } lg={ 4 }>
              <Card>
                <Button disabled={ isBusy } onclick={ this.mine } caption={'START MINING'} />
              </Card>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

  private get = async (url: string) => {
    const response = await fetch(url)
    const body = await response.json();

    if (response.status !== 200) { throw Error(body.message);}
    return body;
  }

  private mine = async () => {
    this.setState({ isBusy: true })
    this.get(Endpoints.mine).then(res => this.setState({
      blocks: [...this.state.blocks, res],
      isBusy: false
    }))
  }
}

export default App;
