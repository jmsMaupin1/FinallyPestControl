import React, { Component } from 'react';
import {Link} from 'react-router'

export default class index extends Component {
	render2() {
		return (
			<li>
                <Link to={this.props.target?this.props.target:"#"}>{this.props.mainText}<i className="fa fa-folder-open-o"></i>
                    <span>{this.props.subText}</span>
                </Link>
            </li>
		);
	}

	render() {
		if(!(this.props.target || this.props.anchor))
			return <div/>

		else {
			if(this.props.target){
				return (
					<li>
		                <Link to={this.props.target}>{this.props.mainText}<i className="fa fa-folder-open-o"></i>
		                    <span>{this.props.subText}</span>
		                </Link>
		            </li>
				);
			} else {
				return (
					<li>
						<a href={"#" + this.props.anchor}>{this.props.mainText}<i className="fa fa-folder-open-o"/>
							<span>{this.props.subText}</span>
						</a>
					</li>
				);
			}
		}

	}
}
