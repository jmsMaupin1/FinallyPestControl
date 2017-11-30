import React, { Component } from 'react';
import './carousel.css';

export default class Carousel extends Component {
	render() {
		return (
		<div className={this.props.classes}>
			{this.props.title?<h1>{this.props.title}</h1>:null}

    		<div id={this.props.target} className="carousel slide">

           		<div className="carousel-inner">
           			{this.props.children}
            	</div>

	            <ol className="carousel-indicators">
	            	
	            </ol>

    		</div>
		</div>
		);
	}
}
