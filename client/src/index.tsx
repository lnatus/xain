import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import { injectGlobal } from 'styled-components';

import { RootStore } from './stores/rootStore'
import { theme } from './common/theme'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  body {
    font-family: ${ theme.fonts.general };
    margin: ${ theme.space.zero };
    padding: ${ theme.space.zero };
    font-size: ${ theme.fontsize.s }
    color: ${ theme.palette.black };
  }

  p {
    margin: ${ theme.space.xs } ${theme.space.zero};
  }

  a,
  a:hover,
  a:visited {
    text-decoration: none;
    color: ${ theme.palette.secondary };
  }

  small a,
  small a:hover,
  small a:visited {
    text-transform: uppercase;
    color: ${ theme.palette.gray };
  }
`

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