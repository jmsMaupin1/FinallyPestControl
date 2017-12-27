import React, { Component } from 'react';
import './carousel.css';

export default class Carousel extends Component {
	render() {
		return (
		<div className={this.props.classes}>
			{this.props.title?<h1>{this.props.title}</h1>:null}

			<br/>
			<br/>
			
    		<div id={this.props.target} className="carousel slide" data-ride="carousel">

           		<div className="carousel-inner">
           			{this.props.children}
            	</div>

    		</div>
		</div>
		);
	}
}
