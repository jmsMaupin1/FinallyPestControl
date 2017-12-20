import React, { Component } from 'react';
import "./other.css";


export default class index extends Component {

	handleSubmit() {
	}

	render() {
		return (
			<div>
				<div className="top-subhead">
		        	<h1 className="text-center">OTHER SERVICES</h1>
		    	</div>
				<div className="container">
	            	<div className="row">

	                <div className="col-lg-6 col-md-6  col-sm-12">
	                    <h3>Tree and Shrub Care</h3>
						<p>We have a six application program to help your trees grow and thrive during the warmer months of the year and stay healthy during the cold winter months.</p>
	                    <hr />
						<p>

							• <strong>Treatment #1</strong> – The first treatment takes place in the late-winter to early spring. We apply an horticultural dormant winter oil designed to target pests and their eggs so that your trees can start off the year strong. <br />

							• <strong>Treatments #2-#5</strong> – These four treatments are designed to manage any insects that have the capability of causing damage to your trees and shrubs. Because different pests attack and lay eggs at different times, our applications are designed to target the insects most likely trying to harm your foliage. <br />

							• <strong>Treatment #6</strong> – The final treatment of the year occurs in the late fall and is a deep root feeding to promote root development and improve soil condition. Our fertilizers also include beneficial Mycorrhizae fungus, seaweed extract, humates, and other important organic materials to encourage tree growth. This deep root feeding and direct injection into the root zone helps the tree store nutrients through winter for next growing season.
	                    </p> <br />
                        <h3>Tree Diseases and Insects</h3>
						<p>
							There are many kind of insects that can harm the trees. Our tree and shrub care program will help manage pests such as:<br />
							• Japanese beetles<br />
							• Lace bugs<br />
							• Bagworms<br />
							• Aphids<br />
							• Sawflies<br />
                            <br />
							When you use Bee Green for your landscaping management, you will have a company that takes a scientific approach to plant health care. We are consistently learning the latest methods of tree care and have professionals who know how to take care of a variety of trees such as:<br />
							• Arborvitaes<br />
							• Norway spruces<br />
							• Colorado blue spruce<br />
							• Maple trees<br />
							• Hawthornes<br />
							• Crabapple trees<br />
						</p><br />
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
