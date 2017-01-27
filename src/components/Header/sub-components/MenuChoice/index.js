import React, { Component } from 'react';

export default class index extends Component {
	render() {
		return (
			<li>
                <a href="index1.html">{this.props.mainText}<i className="fa fa-folder-open-o"></i>
                    <span>{this.props.subText}</span>
                </a>
            </li>
		);
	}
}
