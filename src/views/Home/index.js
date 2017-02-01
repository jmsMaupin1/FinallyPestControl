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
					<BannerSlide active image={ant} caption="Ants are not your friend, contact us now!"/>
           			<BannerSlide image={bee} caption="Dont wait to get stung, contact us now!"/>
           			<BannerSlide image={banner}/>
				</Carousel>

				<Services/>

				<Carousel title="Testimonials" classes="testimonials" target="carousel-testimonial">
					<TestimonialSlide active text="This is the best dude" author="James Maupin" />
					<TestimonialSlide text="This is the best dude" author="James Maupin" />
					<TestimonialSlide text="This is the best dude" author="James Maupin" />
				</Carousel>
			</div>
		);
	}
}
