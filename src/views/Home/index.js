import React, { Component } from 'react'
import BannerImage from '../../assets/carousel/carousel-banner.png'
import Services from '../../components/Services'
import Banner from '../../components/Banner'
import './home.css'

export default class index extends Component {
	render() {
		return (
			<div>
				<Banner image={BannerImage} />
				
				<Services/>

				{/* Contact Form */}
			</div>
		);
	}
}
