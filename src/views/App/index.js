import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Home from '../../views/Home'

export default class App extends Component {
  render() {
    return (
    	<div>
    	<Header />
    	<Router history={hashHistory}>
    		<Route path="/" component={Home}/>
    	</Router>
    	<Footer />
    	</div>
    );
  }
}