import React, { Component } from 'react';

export default class index extends Component {
	render() {
		return (
			<div className="nav-social">
                <i className="fa fa-globe "></i>E-mail:  <a href={"mailto:" + this.props.email}>{this.props.email}</a>  |  <i className="fa fa-mobile "></i>Call: : <a href={"tel:"+this.props.phone}>{this.props.phone}</a>  |  &nbsp;

                <a href={this.props.facebookURL}>
                  <i className="fa fa-facebook-square "></i>
                </a>
                <a href={this.props.linkedinURL} style={{display: this.props.linkedinURL  === "" ? "none" : "inline"}}>
                    <i className="fa fa-linkedin-square "></i>
                </a>
                <a href={this.props.pinterestURL} style={{display: this.props.linkedinURL === "" ? "none" : "inline"}}>
                    <i className="fa fa-pinterest-square "></i>
                </a>
                <a href={this.props.pinterestURL} style={{display: this.props.youtubeURL  === "" ? "none" : "inline"}}>
                    <i className="fa fa-youtube-square "></i>
                </a>
            </div>
		);
	}
}
//<a href="tel:+1-317-660-8794">+1-317-660-8794</a>