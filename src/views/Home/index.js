import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import {BannerSlide} from '../../components/Carousel/sub-components/Slide'
import {TestimonialSlide} from '../../components/Carousel/sub-components/Slide'
import ant from '../../assets/carousel/carousel-ant.png';
import banner from '../../assets/carousel/carousel-banner.png';
import bee from '../../assets/carousel/carousel-bee.png';
import Services from '../../components/Services';
import './home.css'

export default class index extends Component {
	render() {
		return (
			<div>
				<Carousel target="carousel-banner">
           			<BannerSlide active image={banner} caption="Local Lawn Care - Giving You a Lawn You'll Love."/>
				</Carousel>

				<Services/>

				<Carousel title="Testimonials" classes="testimonials" target="carousel-testimonial">
					<TestimonialSlide active text="We just started and our lawn is already looking 100% better." author="- Google Review" />
					<TestimonialSlide text="I've never been happier since we switched to Bee Green. They are very professional and reasonable. Now a lot of my friends are using their services as well." author="- Google Review" />
					<TestimonialSlide text="...I would highly recommend Colwell Lawn & Landscaping for your lawn maintenance and/or landscaping projects. They are a top notch company." author="- Google Review" />
				</Carousel>
			</div>
		);
	}
}
