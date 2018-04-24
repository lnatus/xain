import * as React from 'react'

import { Col, Grid, Row} from 'react-flexbox-grid'
import BlockList from './components/BlockList'
import Header from './components/Header'

class App extends React.Component {
  public state = {
    blocks: []
  }

  public componentDidMount() {
    this.callApi()
      .then(res => this.setState({
         blocks: res.blocks
      })).catch(err => this.setState({
        response: err
      }))
  }

  public callApi = async () => {
    const response = await fetch('http://localhost:8080/api/blocks')
    const body = await response.json();

    if (response.status !== 200) { throw Error(body.message);}

    return body;
  };

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
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App;
