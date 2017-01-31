import React, { Component } from 'react';
import ServiceItem from './sub-components/ServiceItem';
import './services.css'

export default class index extends Component {
	render() {
		return (
			<div className="services container">
				<div className="row ">
                    <ServiceItem icon="fa-clock-o" title="Quick Services" text="Something about very quick services"/>
                    <ServiceItem icon="fa-bug" title="Terminate Pests" text="With Finally Pest Control LLC. your pests will terminated post haste, with extremem prejudice" />                
                    <ServiceItem icon="fa-users" title="Customer Delight" text="At Finally Pest Control we aim not only to provide customer satisfaction, but customer delight" />                
                </div>
                <div className="vid container">
                    <div className="row pad-top-botm">
                        <div className="col-lg-6 col-md-6">
                            <h2>What Is Special About Us ? </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
