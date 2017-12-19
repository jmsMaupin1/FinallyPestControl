import React, { Component } from 'react';

export default class index extends Component {
	render() {
		return (
			<div className="nav-social">
                <i className="fa fa-globe "></i>E-mail:  {this.props.email}  |  <i className="fa fa-mobile "></i>Call: : {this.props.phoneno}  |  &nbsp;

                <a href={this.props.facebookURL}>
                  <i className="fa fa-facebook-square "></i>
                </a>
                <a href={this.props.linkedinURL}>
                    <i className="fa fa-linkedin-square "></i>
                </a>
                <a href={this.props.pinterestURL}>
                    <i className="fa fa-pinterest-square "></i>
                </a>
            </div>
		);
	}
}
