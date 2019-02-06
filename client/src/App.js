import React, { Component } from 'react';
import styled from "styled-components";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import  { AppNavigation } from './AppNavigation.js'
import { AppContainer as BaseAppContainer, ExampleNavigation as BaseNavigation, Body, Title } from "./containers";
import './App.css';
import {Test} from './test';
import {DashBoard} from './DashBoard'
import logo from './logo.png';

const AppContainer = styled(BaseAppContainer)`
  height: calc(100vh - 40px);
`;

const Navigation = styled(BaseNavigation)`
  background: #303641;
  color: #8d97ad;
  font-size: 1em;
  letter-spacing: 2px;
  width: 100px;
  line-height: 22px;
`;

class App extends Component {
render() {
    return (
      <AppContainer>
        <Navigation>
          <center>
        <img className="menu-logo" src={logo} alt="Logo" />
          <Title> Zmanager </Title>
          </center>
          <AppNavigation />
        </Navigation>
        <Body>
          <Switch>
            <Route path="//nodes" component={Test} />
            <Route path="//users" component={Test} />
            <Route path="//dashboard" component={DashBoard} />
            <Route path="/" exact component={DashBoard} />
          </Switch>
        </Body>
      </AppContainer>
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
