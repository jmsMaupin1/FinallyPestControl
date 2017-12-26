import React, { Component } from 'react'
import BgImage from '../../assets/testimonial-background.png'
import Banner from '../Banner'
import ContactForm from '../ContactForm'

export default class Footer extends Component {
	render() {
		return (
			<div id="footer">
				<Banner image={BgImage} color={[0,0,0]} opacity={.7}>
					<div className="col-lg-12" style={{padding: "4% 0 2% 0"}}>
						<h1>Contact Us!</h1>
					</div>
					<div className="col-lg-7 col-md-7">
						<div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
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
					<div className="col-lg-4 col-md-4">
						<ContactForm />
					</div>
				</Banner>
			</div>
		);
	}
}
