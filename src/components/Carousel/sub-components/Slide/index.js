import React, { Component } from 'react';

export class BannerSlide extends Component {
	render() {
		return (
			<div className={"item " + (this.props.active?"active":"")}>
                <img src={this.props.image} alt="" />
                <div className="carousel-caption">
                	{this.props.caption?
                		<h4 className="back-light">{this.props.caption}</h4>:null}
                </div>
            </div>
		);
	}
}

export class TestimonialSlide extends Component {
    render() {
        return (
            <div></div>
        );
    }
}

