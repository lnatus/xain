import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as cors from 'cors'

import { Chain } from './chain'
import { Worker } from './worker'

class App {
  public static run = () => {
    const app = express()
    const port = 8080
    const router = express.Router()

    const chain = new Chain()
    const worker = new Worker(chain)

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    router.get('/blocks', (req, res) => {
      const blocks = chain.getBlocks()
      res.json({ blocks: blocks })
    })

    router.post('/mine', (req, res) => {
      const block = worker.findBlock('TRANSACTION-PLACEHOLDER-DATA')
      chain.addBlock(block)
      res.send();
    })

    app.use('/api', router);
    app.listen(port, () => console.log(`App running on port ${port}`))
  }
}

App.run()