import * as React from 'react'
import { Col, Grid, Row} from 'react-flexbox-grid'
import { Endpoints } from './common/shared'

import BlockList from './components/BlockList'
import Button from './components/Button'
import Card from './components/Card'
import Header from './components/Header'

import styled from 'styled-components'

const Body = styled.body`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: #222;
`

class App extends React.Component {
  public state = {
    blocks: []
  }

  public componentDidMount() {
    this.get(Endpoints.blocks).then(res => this.setState({
      blocks: res.blocks
    }))
  }

  public render() {
    const blocks = this.state.blocks
    return (
      <Body>
        <Header />
        <Grid fluid={true}>
          <Row>
            <Col xs={ 12 } md={ 12 } lg={ 8 }>
              <BlockList blocks={ blocks } />
            </Col>
            <Col xs={ 12 } md={ 12 } lg={ 4 }>
              <Card>
                <Button disabled={ false } onclick={ this.mine } caption={'START MINING'} />
              </Card>
            </Col>
          </Row>
        </Grid>
      </Body>
    )
  }

  private get = async (url: string) => {
    const response = await fetch(url)
    const body = await response.json();

    if (response.status !== 200) { throw Error(body.message);}
    return body;
  }

  private mine = async () => {
    this.get(Endpoints.mine).then(res => this.setState({
      blocks: [...this.state.blocks, res]
    }))
  }
}

export default App;
