import React, { Component } from 'react';
import logo from '../../../../assets/terebinth-icon.png';

export default class index extends Component {
	render() {
		return (

        <div className="navbar-left">
          <img src={logo} style={{float: "left"}} alt="bee green logo" className="img-responsive" />
          <div className="visible-xs visible-sm" style={{float: "left", padding: "25px 0 0 10px", fontSize: "20px"}}><a href="tel:+1-317-507-4197">+1-317-507-4197</a></div>
          <button style={{marginTop: "20px"}} type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
    		</div>

		);
	}
}
