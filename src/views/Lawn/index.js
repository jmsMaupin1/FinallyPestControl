import React, { Component } from 'react';
import "./lawn.css";
import $ from 'jquery';


export default class index extends Component {

	handleSubmit() {
		//TODO: Add firebase queue to send emails with a backend
		var name = $('#form-name').val();
		var email = $('#form-email').val();
		var body = $('#form-message').val();

		window.location = 'mailto:beegreengrass@gmail.com?subject=contact-form&body=' + body;
	}

	render() {
		return (
			<div>
				<div className="back-subhead">
		        	<h1 className="text-center">LAWN SERVICES</h1>
		    	</div>
				<div className="container">
	            	<div className="row">

	                <div className="col-lg-6 col-md-6  col-sm-12">
	                    <h3>Lawn Care Program</h3>
						<p>There are 6 treatments spread out throughout the year to help the grass grow and manage weeds and crab grass.</p>
	                    <hr />
	                    <p>

							•    <strong>Lawn Treatment #1</strong> – In the early-spring we use a specially formulated, slow release granular fertilizer blended with pre-emergent weed control. The goalis to help the grass come out of its winter dormancy and promote new growth. This treatment also targets crabgrass and other weed seed germination to minimize the onslaught of weeds. <br />

							•    <strong>Lawn Treatment #2</strong> – In the late spring, we will use a specially formulated granular fertilizer to promote and maintain the growth and color of the turf. Included is weed control which targets broadleaf weeds and weeds known to thrive in the spring such as Dandelion, Black Medic, Plantain and others. At this time we begin monitoring the lawn for diseases and pests. <br />

							•    L<strong>Lawn Treatment #3</strong> – This application takes place in the summer and uses our granular fertilizer combined with broadleaf weed control. We will keep a sharp eye on your lawn and inspect for grubs, sod web worms and chinch bugs which could reduce the grass’s integrity, turn it brown and even kill it. Because lawn disease is active in the summer we will monitor and recommend corrective measures, if necessary. <br />

							•    <strong>Lawn Treatment #4</strong> - This late-summer application uses granular, slow release fertilizer along with treating broadleaf weeds where needed. Monitoring continues for grubs and sod web worms as they are most prevalent this time of year. <br />

							•    <strong>Lawn Treatment #5</strong> – In the fall, we use a specially formulated granular fertilization for preparing turf for the fall season. Cool season weeds begin to reappear so we will treat as needed. At this time, grubs and sod web worm damage is more visible. If we see this, we would recommend a special treatment to rid your lawn of these invasive insects. <br />

							•    <strong>Lawn Treatment #6</strong> – This final treatment of the year takes place in the late fall and includes specially formulated granular fertilization. The goal is to promote root growth and to help prepare the turf for its winter dormancy. Any persistent late season broadleaf weeds will also be treated.
	                    </p> <br />
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
