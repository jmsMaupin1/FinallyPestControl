import React, { Component } from 'react';

export default class BlogLink extends Component {
	render() {
		return (
			<div className="media">
                <div className="pull-left">
                    <img src={this.props.image} className="img-circle" alt=""  />
                </div>
                <div className="media-body">
                    <span className="media-heading"><a href={this.props.articleLink}>{this.props.text}</a></span>
                    <small className="muted">{this.props.date}</small>
                </div>
            </div>
		);
	}
}
