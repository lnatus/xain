import * as bodyParser from 'body-parser'
import * as express from 'express'

import { Chain } from './chain'
import { Worker } from './worker'

class App {
  public static run = () => {
    const app = express()
    app.use(bodyParser.urlencoded({
      extended: true
    }))

    const chain = new Chain()
    const worker = new Worker(chain)

    app.get('/blocks', (req, res) => res.send(JSON.stringify(chain.getBlocks())));

    app.post('/mine', (req, res) => {
        const block = worker.findBlock('TRANSACTION-PLACEHOLDER-DATA')
        chain.addBlock(block)
        res.send();
    });

    app.listen(8080, () => console.log('App running on port 8080'))
  }
}

App.run()