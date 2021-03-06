import React, { Component } from 'react';
import "./lawn.css";


export default class index extends Component {

	handleSubmit() {
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
						{/* <p>There are 6 treatments spread out throughout the year to help the grass grow and manage weeds and crab grass.</p> */}
                        <p>At Bee Green we recommend our six lawn care treatment program. This professionally scheduled system works together throughout the year to provide effective benefits in faclitating grass growth, weed control and crabgrass management. </p>
	                    <hr />
	                    <p>

							•    <strong>Lawn Treatment #1</strong> – In the early-spring we use a specially formulated, slow release granular fertilizer blended with pre-emergent weed control. The goal is to help the grass come out of its winter dormancy and promote new growth. This treatment also targets crabgrass and other weed seed germination to minimize the onslaught of weeds. <br /><br />

							•    <strong>Lawn Treatment #2</strong> – In the late spring, we will use a specially formulated granular fertilizer to promote and maintain the growth and color of the turf. Included is weed control which targets broadleaf weeds and weeds known to thrive in the spring such as Dandelion, Black Medic, Plantain and others. We will actively begin monitoring the lawn for diseases and pests. <br /><br />

							•    <strong>Lawn Treatment #3</strong> – This application takes place in the summer and uses our granular fertilizer combined with broadleaf weed control. We will keep a sharp eye on your lawn and inspect for grubs, sod web worms and chinch bugs which could reduce the grass’s integrity, turn it brown and even kill it. Because lawn disease is active in the summer we will monitor and recommend corrective measures, if necessary. <br /><br />

							•    <strong>Lawn Treatment #4</strong> - This late-summer application uses granular, slow release fertilizer along with treating broadleaf weeds where needed. Monitoring continues for grubs and sod web worms as they are most prevalent this time of year. <br /><br />

							•    <strong>Lawn Treatment #5</strong> – In the fall, we use a specially formulated granular fertilization for preparing turf for the fall season. Cool season weeds may begin to resurface again. Treatment for these weeds are included as needed. Grub and sod web worm damage is typically more prevalent during this period. Special treatment recommendations to elimanate your lawn of these invasive insects will be presented. <br /><br />

							•    <strong>Lawn Treatment #6</strong> – This final treatment of the year takes place in the late fall and includes specially formulated granular fertilization. The goal is to promote root growth and to help prepare the turf for its winter dormancy. Any persistent late season broadleaf weeds will also be treated. In addition to this lawn care treatment, adding aeration and/or overseeding around this time are significant approchaes to preserving your lawn for the harsh winter weather, making way for a greener, healthier lawn in the Spring.
	                    </p> <br />
						<h3>Additional Lawn Services</h3>
						<p><strong>All Natural Mole Treatment:</strong> Treatments are a specialy formulated, non-toxi, deterrent to repel moles out of your lawn. This is done without killing the moles versus putting a poisonous killing agent in your yard that could potentially harm kids and other animals as well. First 2 treatments 14 days apart. Then every 30 days thereafter.</p>
						<p><strong>Bed Pre-Emergent:</strong> These applications can prevent the germination of weed seeds in the open areas of the landscape beds. 4 treatments starting in early Spring. These will not control established weeds. </p>
						<p><strong>Organic Lawn Care Treatments:</strong> Our organic fertilizer is food grade, and safe for pets, kids and the environment. The organic fertilizer we use produces no phosphates and little nitrogen so water supplies and the earth around the property are always as safe as possible. </p>
						<p><strong>Aeration:</strong> We highly recommend having your lawn aerated once a year to keep your grass healthy and allow more nutrients to reach the roots in order to help them extend and thrive. When you combine our lawn aeration service with overseeding, you are sure to have a full, thick and consistent looking lawn that is free of bare spots. </p>
						<p><strong>Overseeding:</strong> We use a blend of Bluegrass and Perennial Ryegrass seed. This seed establishes quickly, is high yielding and offers a long growing season. </p><br />
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
