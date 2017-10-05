import React from 'react'
import { render } from 'react-dom'
import App from './App'
import eventManagement from './eventManagement'
import addPurchase from './addPurchase'
import { Router, Route, browserHistory } from 'react-router';
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './stylesheets/App.css'

render(
  //<App/>
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/eventManagement" component={eventManagement} />
    <Route path="/addPurchase" component={addPurchase}/>
  </Router>
  , document.getElementById('root'))
