import React from 'react'
import { Router } from 'react-router-dom'

import './config/Reactotron'

import Routes from './routes'
import history from './services/history'
import GlobalStyle from './styles/global'

const App = () => (
  <Router history={history}>
    <Routes />
    <GlobalStyle />
  </Router>
)

export default App
