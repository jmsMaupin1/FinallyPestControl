import React, { Component } from 'react';
import ServiceItem from './sub-components/ServiceItem';
import './services.css'

export default class index extends Component {
	render() {
		return (
			<div className="services container">
				<div className="row ">
                    <ServiceItem icon="fa-clock-o" title="Quick Services" text="Finally Pest Control Prides itself on fast and effective service"/>
                    <ServiceItem icon="fa-bug" title="Terminate Pests" text="With Finally Pest Control LLC. your pests will be terminated post haste, with extreme prejudice" />                
                    <ServiceItem icon="fa-users" title="Customer Delight" text="At Finally Pest Control we aim not only to provide customer satisfaction, but customer delight" />                
                </div>
                <div className="vid container">
                    <div className="row pad-top-botm">
                        <div className="col-lg-6 col-md-6">
                            <h2>What Is Special About Us ? </h2>
                            <p>
                                At Finally Pest Control, our number 1 priority is YOU the customer. What sets us apart is our knowledge of pest, level of professionalism and ability to effectively provide services. We help our clients to identify their best pest control management plan while providing Eco friendly solutions that are safe within your home.
                            </p>
                            <br />
                            <br />
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <iframe src="https://www.youtube.com/embed/gJZV3qQQq8M" ></iframe>
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}
