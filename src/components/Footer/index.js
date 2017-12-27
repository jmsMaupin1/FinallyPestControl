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
		                    <small>Terebinth Tree Care</small>
		                    <p>
                                With over 30 years experience in Green Industry, Terebinth Tree Care brings focused attention to the development and implementation of programs that keep our client's trees and shrubs vibrant and beautiful.

                                The foundation of our plant care is based on Integrated Pest Management (IPM), which involves the following:
                                1. The proper selection of plants for a given site and proper installation.
                                2. Monitoring of plants for pests and disease.
                                3. Proactive and Reactive applications to prevent and correct Plant Health issues with each plant.
                                4. Proper nutrient plans for each plant species to keep them as vibrant and healthy as possible.

                                We are using the most up to date products, with special care to be as environmentally sensitive as possible. We now have a whole array of organic products, which are proving very effective in the nutrition of plants.

                                We are also finding effective organic based pesticides for some applications, where they can be an effective alternative to more traditional products.

                                We offer Arborist services, which include consultation, assessment, inventories and identification.
		                    </p>
		                </div>


		               	<div className="col-lg-4 col-md-4"></div>

		                <div className="col-lg-4 col-md-4">
		                    <i className="fa fa-sliders fa-2x"></i>
		                    <span>Contact Us!</span>
		                    <h3>Call: 1-317-507-4197</h3>
		                    	<a href="mailto:terebinthtreecare@att.net">
								<h3>terebinthtreecare@att.net</h3>
								</a>

							<h2>Get ahold of us today</h2>

		                </div>
		            </div>
		        </div>
	        </div>
		);
	}
}
