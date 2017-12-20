import React, { Component } from 'react';
import Contact from '../ContactForm';
import Carousel from '../../components/Carousel'
import {TestimonialSlide} from '../../components/Carousel/sub-components/Slide'

export default class Banner extends Component {

	renderDesktop() {
		return (
			<div style={{width:"100%"}}>

				<div className="col-lg-12" style={{ position: "absolute", paddingTop: "2%" }}>
					<div className="col-lg-8 col-lg-visible">
						<Carousel title="Testimonials" classes="testimonials" target="carousel-testimonial">
							<TestimonialSlide active text="We just started and our lawn is already looking 100% better." author="- Google Review" />
							<TestimonialSlide text="I've never been happier since we switched to Bee Green. They are very professional and reasonable. Now a lot of my friends are using their services as well." author="- Google Review" />
							<TestimonialSlide text="...I would highly recommend Colwell Lawn & Landscaping for your lawn maintenance and/or landscaping projects. They are a top notch company." author="- Google Review" />
						</Carousel>
					</div>
					<div className="col-lg-4" >
						<Contact />
					</div>
				</div>

				<img src={this.props.image} alt="bee green banner" className="img-responsive" style={{float: "top"}}/>
			</div>
		);
	}

	renderMobile() {
		return (
			<Contact />
		)
	}

	render() {
		var windowSize = document.documentElement.clientWidth;

		return windowSize <= 1199 ? this.renderMobile() : this.renderDesktop();
	}
}


