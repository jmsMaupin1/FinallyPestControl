import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="container">
		            <div className="row">
		                <div className="col-lg-8 col-md-8 about-ftr">
		                    <i className="fa fa-building fa-2x"></i>
		                    <span>A Small Introduction</span>
		                    <small>Bee Green Lawn Care</small>
		                    <p>
                                At Bee Green, we stand by our service. Customer service is our top priority. It is something we take very serious because if our customers are not satisfied, we are not satisfied. Our work is guaranteed. We provide FREE service calls between treatments for any reason. Our professional technicians are trained to detect and address any concerns. Since 2001, we have been providing lawn service in Carmel IN and would love to show what we can do for you.

                                Bee Green has also received the following honors for our work:
                                  • Angie’s List Super Service Award 2015
                                  • Angie’s List Super Service Award 2016
                                  • Haverstick Lawn of the Month – We have won this accolade a few times on a few different properties
		                    </p>
		                </div>

		                {/*<div className="col-lg-4 col-md-4">
		                		                    <i className="fa fa-paper-plane-o fa-2x"></i>
		                		                    <span>From the blog</span>
		                		                    <small>TBA</small>
		                		                    <div className="blog-footer-div">
		                		                    	<BlogLink image="assets/img/user2.png" articleLink="#" date="Posted 17 June 2014" text="Pellentesque habitant morbi tristique" />
		                		                        <BlogLink image="assets/img/user.gif" articleLink="#" date="Posted 27 June 2014" text="Pellentesque habitant morbi tristique" />
		                		                    </div>
		                		                </div>*/}
		               	<div className="col-lg-4 col-md-4"></div>

		                <div className="col-lg-4 col-md-4">
		                    <i className="fa fa-sliders fa-2x"></i>
		                    <span>Contact Us!</span>
		                    <h3>Call: 1-317-660-8794</h3>
		                    	<a href="mailto:beegreenlawncare@gmail.com">
								<h3>beegreengrass@gmail.com</h3>
								</a>
							<span>Hours: Mon - Fri: 9:00 am - 5:00 pm</span>

							<h2>Get ahold of us today</h2>

		                </div>
		            </div>
		        </div>
	        </div>
		);
	}
}
