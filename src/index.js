import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import Home from './views/Home';
import Contact from './views/Contact';
import About from './views/About';
import './index.css'

ReactDOM.render(
  	<Router history={browserHistory}>
    	<Route path="/" component={App}>
    		<IndexRedirect to="/index.html" />
			<IndexRoute component={Home}/>
			<Route path="about" component={About} />
			<Route path="contact" component={Contact} />
    	</Route>
    </Router>,
  document.getElementById('root')
);
