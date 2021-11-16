import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/App'
import { createStore } from '@reduxjs/toolkit'
import {rootReducer} from './reducers'
import {Provider} from 'react-redux'

const store = createStore(rootReducer)


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
