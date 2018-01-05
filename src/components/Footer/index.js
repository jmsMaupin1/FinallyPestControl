import React, { Component } from 'react';
import ContactForm from '../ContactForm';
import './footer.css'

export default class Footer extends Component {
	constructor(props) {
	    super(props)

	    this.state = {
	      height: 0
	    }
	}

	componentDidMount() {
    	const height = this.divElement.clientHeight;
    	this.setState({ height });
  	}

	render() {
		return (
			<div
				id="footer"
				className="plax"
				ref={(divElement) => this.divElement = divElement}>
				<div style={{position: "absolute", width: "100%", height: this.state.height, backgroundColor: "rgba(0, 0, 0, .7)"}} />
				<div className="col-lg-12" style={{paddingTop: "4%", paddingBottom: "2%"}}>
					<h1>Contact Us!</h1>
				</div>
				<div>
					<div className="col-lg-6 col-md-6">
						<div className="col-lg-11 col-lg-offset-1">
							<h1 style={{paddingBottom: "5%"}}>About Us!</h1>
							<div style={{textAlign: "left"}}>
								<p>
									At Bee Green, we stand by our service. Customer service is our top priority. It is
									something we take very serious because if our customers are not satisfied,
									we are not satisfied. Our work is guaranteed. We provide FREE service calls
									between treatments for any reason. Our professional technicians are trained to detect and
									address any concerns. Since 2001, we have been providing lawn service in Carmel IN and would
									love to show what we can do for you. Bee Green has also received the following honors for our
									work:
									<br/>
									<br/>
									• Angie’s List Super Service Award 2015
									<br/>
									• Angie’s List Super Service Award 2016
									<br/>
									• Haverstick Lawn of the Month – We have won this accolade a few times on a few different properties
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-offset-1 col-lg-4 col-md-4">
						<ContactForm />
					</div>
				</div>
			</div>
		);
	}
}
