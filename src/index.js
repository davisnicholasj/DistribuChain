import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import eventManagement from './modules/views/eventManagement'
import addPurchase from './modules/views/addPurchase'
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

render(
  //<App/>
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/eventManagement" component={eventManagement} />
    <Route path="/addPurchase" component={addPurchase}/>
  </Router>
  , document.getElementById('root'))
