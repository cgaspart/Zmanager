import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navigation from './containers/navigation'
import Home from './routes/home'
import Api from './routes/api'
import Undefined from './undefined'
import Search from './containers/search'

import './App.css';

const routes = [
	{ path: '/api', exact: false, component: Api},
	{ path: '/search/:search', exact: false, component: Search},
	{ path: '/', exact: true, component: Home},
	{ path: '/', exact: false, component: Undefined}
]

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<Navigation/>
		<Switch>
			{ routes.map((route) => {
				return (
				route.exact ?
					<Route path={route.path} exact component={route.component}/>
				:
					<Route path={route.path} component={route.component}/>
				)
			})}
		</Switch>
      </div>
    );
  }
}

export default App;
