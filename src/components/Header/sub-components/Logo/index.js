import React, { Component } from 'react';
import logo from '../../../../assets/Premium-Logo.png';

export default class index extends Component {
	render() {
		return (

        	<div className="logo">
        		<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            	<span className="icon-bar"></span>
                	<span className="icon-bar"></span>
                	<span className="icon-bar"></span>
        		</button>
                  <div className="">
                  <a className="navbar-brand" href="#">
                        <img src={logo} className="headerImage" alt="Bee Green logo" />
                  </a>
                  </div>
              
    		</div>
		);
	}
}
