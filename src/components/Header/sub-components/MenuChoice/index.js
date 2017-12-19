import React, { Component } from 'react';
import {Link} from 'react-router'

export default class index extends Component {
	render() {
		return (
			<li>
                <Link to={this.props.target?this.props.target:"#"}>{this.props.mainText}<i className="fa fa-folder-open-o"></i>
                    <span>{this.props.subText}</span>
                </Link>
            </li>
		);
	}
}
