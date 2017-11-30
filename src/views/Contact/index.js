import React, { Component } from 'react';
import $ from 'jquery';
import './contact.css';

export default class index extends Component {

	handleSubmit() {
		//TODO: Add firebase queue to send emails with a backend
		var name = $('#form-name').val();
		var email = $('#form-email').val();
		var body = $('#form-message').val();

		window.location = 'mailto:beegreenlawncare@gmail.com?subject=contact-form&body=' + body;
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
	                        Call: +1-317-660-8794
	                            <br />
	                        e-mail: beegreenlawncare@gmail.com
	                             <br />
	                    </p>
	                    <h3>Social Presence</h3>
	                    <a href="#"><i className="fa fa-facebook-square fa-3x color-facebook"></i></a>
	                    <a href="#"><i className="fa fa-twitter-square fa-3x color-twitter"></i></a>
	                </div>
	                <div className="col-lg-6 col-md-6  col-sm-12">
	                    <h3>Write Us or Call Today </h3>
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
				<iframe className="cnt" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.323961662131!2d-86.16010238461735!3d39.978865079418355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814ac6b2e49172f%3A0x3bfaeba5032d4dc2!2s13295+N+Illinois+St+%23122%2C+Carmel%2C+IN+46032!5e0!3m2!1sen!2sus!4v1512018704877"></iframe>
    		</div>
        </div>
		);
	}
}
