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
    chainStore={ rootStore.chainStore }>
    <App />
  </Provider>,
  document.getElementById('xain') as HTMLElement
)

registerServiceWorker();

function startUp() {
  rootStore.chainStore.getBlocks()
}

startUp()