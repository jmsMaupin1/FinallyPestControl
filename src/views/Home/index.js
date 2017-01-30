import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import {BannerSlide} from '../../components/Carousel/sub-components/Slide'
import Services from '../../components/Services';
import Testimonials from '../../components/Testimonials';
import './home.css'

export default class index extends Component {
	render() {
		return (
			<div>
				<Carousel/>
				<Services/>
				<Testimonials />
			</div>
		);
	}
}
