import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import './styles/index.css'
import reducer from './reducers'
import { CustomMap } from './components/map'
import rootSaga from './saga/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <CustomMap />
  </Provider>,
  document.getElementById('mapid')
);
