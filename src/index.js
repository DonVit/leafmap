import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css'
import reducer from './reducers'
import { CustomMap } from './components/map'

const mystore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={mystore}>
    <CustomMap />
  </Provider>,
  document.getElementById('mapid')
);
