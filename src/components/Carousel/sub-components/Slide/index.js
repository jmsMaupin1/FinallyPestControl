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
            <div className={"item " + (this.props.active?"active":"")}>
                <div className="container center">
                    <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 slide-custom">
                        <h3>
                            <i className="fa fa-quote-left"></i>
                            {this.props.text}
                            <i className="fa fa-quote-right"></i>
                        </h3>
                        <h5>
                            <strong className="c-black">
                                {this.props.author}
                            </strong>
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}
