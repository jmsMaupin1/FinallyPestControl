import React, { Component } from 'react';
import ContactForm from '../ContactForm';
import BgImage from '../../assets/testimonial-background.png';

var style = {

	parallax: function(background) {
		return {
			overflow: "hidden",
			paddingBottom: "50px",
			backgroundImage: "url(" + background + ")",
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
	},

	divCover: function(height, color, opacity) {
		return {
			position: "absolute",
			width: "100%",
			height: height,
			backgroundColor: `rgba( ${color[0]} , ${color[1]}, ${color[2]}, ${opacity})`
		}
	}
}

export default class Footer extends Component {
	constructor(props) {
	    super(props)

	    this.state = {
	      height: 0,
	      backgroundImage: "",
	    }
	}

	componentDidMount() {
    	const height = this.divElement.clientHeight;
    	const backgroundImage = this.props.image;
    	this.setState({ height, backgroundImage });
  	}

	render() {
		console.log(this.state.backgroundImage)
		return (
			<div style={style.parallax(this.props.image)}
				 ref={(divElement) => this.divElement = divElement}>
				<div style={style.divCover(this.state.height, this.props.color, this.props.opacity)} />
				{this.props.children}
			</div>
		);
	}
}
