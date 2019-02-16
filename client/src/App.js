import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navigation from './navigation/navigation'
import Search from './misc/search'
import Home from './misc/home'
import Undefined from './misc/undefined'

import Nodes from './nodes/index'
import Trade from './trading/index'
import Mine from './mining/index'

import './App.css';

const routes = [
	{ path: '/trading', exact: true, component: Trade},
	{ path: '/mining', exact: true, component: Mine},
	{ path: '/nodes/', exact: true, component: Nodes},
	{ path: '/nodes/:id', exact: true, component: Nodes},
	{ path: '/search/:search', exact: true, component: Search},
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
