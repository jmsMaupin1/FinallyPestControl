import React, { Component } from 'react';
import "./mosquito.css";


export default class index extends Component {

	handleSubmit() {
	}

	render() {
		return (
			<div>
				<div className="top-subhead">
		        	<h1 className="text-center">MOSQUITO CONTROL</h1>
		    	</div>
				<div className="container">
	            	<div className="row">

	                <div className="col-lg-6 col-md-6  col-sm-12">
						<h3>Mosquito Control Program</h3>
	                    <hr />
						<p>We also can help minimize the level of mosquitoes on your property. Along with the itchy red spots that these annoying little insects can cause, they also are known to carry viruses such as the Zika Virus and West Nile Virus. Treatment includes a thorough application and spray to all prime points of the perimeter and yard including trees, bushes and shrubs; most treatments last 21 days. Keep your friends, family and pets safer and more comfortable when you use Bee Green for all of your pest control services. <br />
	                    </p>
					   <h3>Additional Pest Control</h3>
					   <p><strong>Perimeter Pest Control Program:</strong> Our perimeter pest control program generally involves 4-5 treatments around the outside of the home in order to create a solid barrier. By spraying throughout the year, we consistently ensure that insects do not come into your home. We will spray the base around the home as well as decks and patios to provide a proper defense against the pesky pests that are trying to enter your home. We also spray the entryways around the doors and under the eaves. Regardless of the insects or where they are located, we have the means of helping you enjoy a more comfortable life with minimal insects.<br />
					   Some of the insects we target include: <br />
					   • Ants<br />
					   • Spiders<br />
					   • Wasps<br />
					   • Cockroaches<br />
					   </p>
					   <p><strong>Flea and Tick Program:</strong> Bee Green has a comprehensive flea and tick program as well to keep your pets safe when roaming around outside. Treatments target flea and ticks around the yard. Ticks must carry many diseases that are harmful to people. These treatments are another preventative measure that can be taken to keep your family, friends and pets safer.</p><br />
	                </div>
                    <div className="col-lg-6 col-md-6  col-sm-12">
	                    <h3>Get A Free Estimate:</h3>
	                    <hr />
	                    <form>
	                        <div className="row">
	                            <div className="col-lg-6 col-md-6 col-sm-6">
	                                <div className="form-group">
	                                    <input id="form-name" type="text" className="form-control" required="required" placeholder="First Name" name="name"/>
	                                </div>
	                                <div className="form-group">
	                                    <input id="form-name" type="text" className="form-control" required="required" placeholder="Last Name" name="name"/>
	                                </div>
	                                <div className="form-group">
	                                    <input id="form-name" type="text" className="form-control" required="required" placeholder="Phone Number" name="name"/>
	                                </div>
	                                <div className="form-group">
	                                    <input id="form-name" type="text" className="form-control" required="required" placeholder="Email Address" name="name"/>
	                                </div>
	                            </div>
	                            <div className="col-lg-6 col-md-6 col-sm-6">
	                                <div className="form-group">
	                                    <input id="form-email" type="text" className="form-control" required="required" placeholder="Address" name="email"/>
	                                </div>
	                                <div className="form-group">
	                                    <input id="form-email" type="text" className="form-control" required="required" placeholder="City" name="email"/>
	                                </div>
	                                <div className="form-group">
	                                    <input id="form-email" type="text" className="form-control" required="required" placeholder="State" name="email"/>
	                                </div>
	                                <div className="form-group">
	                                    <input id="form-email" type="text" className="form-control" required="required" placeholder="Zip Code" name="email"/>
	                                </div>
	                            </div>
	                        </div>
	                        <div className="row">
	                            <div className="col-lg-12 col-md-12 col-sm-12">
	                                <div className="form-group">
	                                    <textarea name="message" id="form-message" required="required" className="form-control" rows="4" placeholder="Message"></textarea>
	                                </div>
	                                <div className="form-group">
	                                    <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Get Quote Today!</button>
	                                </div>
	                            </div>
	                        </div>
	                    </form>
                        <h3>Social Presence</h3>
                       <a href="#"><i className="fa fa-facebook-square fa-3x color-facebook"></i></a>
                       <a href="#"><i className="fa fa-twitter-square fa-3x color-twitter"></i></a>
	                </div>

	            </div>
	        </div>
        	{/* <div>
				<iframe className="cnt" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.323961662131!2d-86.16010238461735!3d39.978865079418355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814ac6b2e49172f%3A0x3bfaeba5032d4dc2!2s13295+N+Illinois+St+%23122%2C+Carmel%2C+IN+46032!5e0!3m2!1sen!2sus!4v1512018704877"></iframe>
    		</div> */}
        </div>
		);
	}
}
