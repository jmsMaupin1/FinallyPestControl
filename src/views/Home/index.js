import React, { Component } from 'react'
import Services from '../../components/Services'
import Banner from '../../components/Banner'
import BgImage from '../../assets/BannerBG.png'
import Carousel from '../../components/Carousel'
import Contact from '../../components/ContactForm'
import {TestimonialSlide} from '../../components/Carousel/sub-components/Slide'
import './home.css'

export default class index extends Component {
	render() {
		return (
			<div>
				<Banner image={BgImage} color={[0, 0, 0]} opacity={.6}>
					<div className="col-lg-11 col-lg-offset-1" style={{paddingTop: "5%"}}>
						<div className="col-lg-7 col-md-7">
							<a href="https://www.google.com/search?q=bee+green+lawn+care+google+reviews&rlz=1C5CHFA_enUS711US712&oq=bee+green+lawn+care+google+reviews&aqs=chrome..69i57.4150j0j4&sourceid=chrome&ie=UTF-8#lrd=0x886b4baef77f97d5:0x3d8061624e77161a,1,,," target="_blank" style={{textDecoration: "none", color:"white"}}><Carousel title="Testimonials">
								<TestimonialSlide active author="Google Review" text="We just started and our lawn is already looking 100% better." />
								<TestimonialSlide author="Google Review" text="I've never been happier since we switched to Bee Green. They are very professional and reasonable. Now a lot of my friends are using their services as well" />
								<TestimonialSlide author="Google Review" text="I would highly recommend Colwell Lawn & Landscaping for your lawn maintenance and/or landscaping projects. They are a top notch company." />
							</Carousel></a>
						</div>
						<div className="col-lg-4 col-md-4">
							<Contact />
						</div>
					</div>
				</Banner>

				<Services/>
			</div>
		);
	}
}
