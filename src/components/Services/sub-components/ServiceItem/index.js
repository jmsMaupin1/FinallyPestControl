import React, { Component } from 'react';

export default class index extends Component {
	render() {
		return (
			<div className="col-lg-4 col-md-4  col-sm-4" >
                <a href={this.props.link}><i  className={"fa fa-5x  icon-round  faa-ring animated " + this.props.icon}></i></a>
                <h4 className="text-center"><strong>{this.props.title}</strong></h4>
                <p className="text-center">
                    {this.props.text}
                </p>
            </div>
		);
	}
}
