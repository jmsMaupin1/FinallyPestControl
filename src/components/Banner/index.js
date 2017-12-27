import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'


export default class Footer extends Component {
	state = {
		height: 0
	}

	componentDidMount() {
    	const height = this._container.clientHeight;
    	this.setState({ height });
  	}

	parallax = (background) => {
		return {
			overflow: "hidden",
			paddingBottom: "50px",
			backgroundImage: `url(${background})`,
			backgroundAttachment: "fixed",
			backgroundSize: "cover",
			width: "100%",
			display: "block",
			height: "auto",
			minHeight: "300px",
			color: "#fff",
			textShadow: "#000 0px 0px 15px",
			textAlign: "center"
		}
	}

	divCover = (height, color: [r, g, b], opacity) => {
		return {
			position: "absolute",
			width: "100%",
			height: height,
			backgroundColor: `rgba( ${r} , ${g}, ${b}, ${opacity})`
		}
	}

	render() {
		const { image, opacity, color, children } = this.props
		const { height } = this.state

		return (
			<div style={this.parallax(image)}
				 ref={r => this._container = r && findDOMNode(r)}>
				<div style={this.divCover(height, color, opacity)} />
				{children}
			</div>
		);
	}
}