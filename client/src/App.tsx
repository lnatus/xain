import * as React from 'react'
import { Col, Grid, Row} from 'react-flexbox-grid'

import BlockList from './components/BlockList'
import Button from './components/Button'
import Card from './components/Card'
import Header from './components/Header'

class App extends React.Component {
  public state = {
    blocks: [],
    isMining: false
  }

  public componentDidMount() {
    this.loadBlockchain().then(res => this.setState({
      blocks: res.blocks
      }))
  }

  public render() {
    const blocks = this.state.blocks
    return (
      <div className="xain">
        <Header />
        <Grid fluid={true}>
          <Row>
            <Col xs={ 12 } md={ 12 } lg={ 8 }>
              <BlockList blocks={ blocks } />
            </Col>
            <Col xs={ 12 } md={ 12 } lg={ 4 }>
              <Card>
                <Button disabled={ this.state.isMining } onclick={ this.mine } caption={'START MINING'} />
              </Card>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

  private loadBlockchain = async () => {
    const response = await fetch('http://localhost:8080/api/blocks')
    const body = await response.json();

    if (response.status !== 200) { throw Error(body.message);}
    return body;
  };

  private mine = async () => {
    this.state.isMining = true
    await fetch('http://localhost:8080/api/mine', {
      body: JSON.stringify({
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post'
    }).then(() => {
      this.loadBlockchain().then(res => this.setState({
        blocks: res.blocks
      }))
      this.state.isMining = false
    })
  }
}

export default App;
