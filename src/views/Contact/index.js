import React, { Component } from 'react';
import $ from 'jquery';
import './contact.css';

export default class index extends Component {

	handleSubmit() {
		//TODO: Add firebase queue to send emails with a backend
		var name = $('#form-name').val();
		var email = $('#form-email').val();
		var body = $('#form-message').val();

		window.location = 'mailto:finallypestcontrol@gmail.com?subject=contact-form&body=' + body;
	}

	render() {
		return (
			<div>
				<div className="general-subhead">
		        	<h1 className="text-center">CONTACT US</h1>
		    	</div>
				<div className="container">
	            	<div className="row">

	                <div className="col-lg-6 col-md-6  col-sm-12">
	                    <h3>Reach Us Here</h3>
	                    <hr />
	                    <p>
	                        Indianapolis IN, USA
	                            <br />
	                        Call: +1-317-508-7464
	                            <br />
	                        e-mail: finallypestcontrol@gmail.com
	                             <br />
	                    </p>
	                    <h3>Social Presence</h3>
	                    <a href="#"><i className="fa fa-facebook-square fa-3x color-facebook"></i></a>
	                    <a href="#"><i className="fa fa-twitter-square fa-3x color-twitter"></i></a>
	                </div>
	                <div className="col-lg-6 col-md-6  col-sm-12">
	                    <h3>Need Help ? Write Us. </h3>
	                    <hr />
	                    <form>
	                        <div className="row">
	                            <div className="col-lg-6 col-md-6 col-sm-6">
	                                <div className="form-group">
	                                    <input id="form-name" type="text" className="form-control" required="required" placeholder="Name" name="name"/>
	                                </div>
	                            </div>
	                            <div className="col-lg-6 col-md-6 col-sm-6">
	                                <div className="form-group">
	                                    <input id="form-email" type="text" className="form-control" required="required" placeholder="Email address" name="email"/>
	                                </div>
	                            </div>
	                        </div>
	                        <div className="row">
	                            <div className="col-lg-12 col-md-12 col-sm-12">
	                                <div className="form-group">
	                                    <textarea name="message" id="form-message" required="required" className="form-control" rows="4" placeholder="Message"></textarea>
	                                </div>
	                                <div className="form-group">
	                                    <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Submit Request</button>
	                                </div>
	                            </div>
	                        </div>
	                    </form>
	                </div>

	            </div>
	        </div>
        	<div>
				<iframe className="cnt" src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Indianapolis,+Indiana,+IN,+United+States&aq=0&sll=39.7876465,-86.1211756,11.36&sspn=61.282355,146.513672&ie=UTF8&hq=&hnear=Indianapolis,+Indiana&ll=39.7876465,-86.1211756,11.36&spn=0.01628,0.025663&z=14&iwloc=A&output=embed"></iframe>
    		</div>
        </div>
		);
	}
}
