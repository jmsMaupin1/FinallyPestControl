import React, { Component } from 'react';
import ServiceItem from './sub-components/ServiceItem';
import './services.css'

export default class index extends Component {
	render() {
		return (
			<div className="services container">
				<div className="row ">
                    <ServiceItem icon="fa-clock-o" title="Quality Services" text="If you are searching for lawn fertilizer companies who will be honest about expectations or a pest control company to help make spending time outdoors safer and more comfortable, contact Bee Green today."/>
                    <ServiceItem icon="fa-pagelines" title="Lawn Care" text="Our service includes a 6 treatment program with a high end slow release fertilizer to ensure correct nutrients are reaching the roots helping the grass grow strong & healthy while also maintaining a beautiful green look." />
                    <ServiceItem icon="fa-bug" title="Customer Delight" text="Insects can make evenings outside with friends unenjoyable. Our perimeter pest control treatments and mosquito control will and create a barrier around the house to prevent insects from making it inside your house." />
                </div>
                <div className="vid container">
                    <div className="row pad-top-botm">
                        <div className="col-lg-6 col-md-6">
                            <h2>Why Bee Green Lawn Care?</h2>
                            <p>
                                When you want high quality lawn care in Carmel IN give Bee Green a call. We like to say we are a lawn care company with a conscious because we provide a high level of lawn services while using the latest methods to ensure minimal impact on the environment. From our lawn fertilizer service to our plant health care, we will help you have the beautiful green lawn you deserve.
                            </p>
                            <br />
                            <br />
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <iframe src="https://www.youtube.com/embed/GJulQWRbLAY" ></iframe>
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}
