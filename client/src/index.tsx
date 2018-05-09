import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import { RootStore } from './stores/rootStore'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootStore = new RootStore()

ReactDOM.render(
  <Provider
    rootStore={ rootStore }
    blockStore={ rootStore.blockStore }>
    <App />
  </Provider>,
  document.getElementById('xain') as HTMLElement
)

registerServiceWorker();

function startUp() {
  rootStore.blockStore.getBlocks()
}

startUp()