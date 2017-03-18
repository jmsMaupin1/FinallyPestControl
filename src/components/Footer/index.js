import React, { Component } from 'react';
import BlogLink from './sub-components/BlogLink';
import './footer.css';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="container">
		            <div className="row">
		                <div className="col-lg-4 col-md-4 about-ftr">
		                    <i className="fa fa-building fa-2x"></i>
		                    <span>A Small Introduction</span>
		                    <small>Finally Pest Control LLC.</small>
		                    <p>
		                        A family founded company, with family founded ideals. Here at Finally Pest Control
		                        we take pride in both our work, and our relationship with our loyal customers. 
		                        If you have a pest, or even suspect you might, dont hesitate to give us a call, 
		                        time is of the essence and your comfort is our top priority.
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
		                    <small>Dont hesitate, get ahold of us today</small>
		                    Call: 1-317-508-7464
		                     <br />
		                    finallypestcontrol@gmail.com
		                </div>
		            </div>
		        </div>
	        </div>
		);
	}
}
