import * as React from 'react'
import { Col, Grid, Row} from 'react-flexbox-grid'
import { Endpoints, Resources } from './common/shared'

import BlockList from './components/BlockList'
import Button from './components/Button'
import Card from './components/Card'
import Header from './components/Header'
import ImageLink from './components/ImageLink'
import ProgressBar from './components/ProgressBar'

import octocat from './images/github.svg'

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
        {
          isBusy && <ProgressBar />
        }
        <Grid fluid={true}>
          <Row>
            <Col xs={ 12 } md={ 12 } lg={ 8 }>
              <BlockList blocks={ blocks } />
            </Col>
            <Col xs={ 12 } md={ 12 } lg={ 4 }>
              <Card>
                <Button disabled={ isBusy } onclick={ this.mine } caption={'START MINING'} />
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
                  </Col>
                </Row>
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
