import React, { Component } from 'react';
import { MemoryRouter as Router, Route } from "react-router-dom";
import  { menu } from './menu.js'
import './App.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };


render() {
    return (
      <div className="App">
            <Route path="/" component={menu} />
      </div>
    );
  }
}

export const createApp = () => {
  return class SideNavApp extends React.Component {
    render() {
      return (
        <Router>
          <App />
        </Router>
      );
    }
  };
};

export default App;
