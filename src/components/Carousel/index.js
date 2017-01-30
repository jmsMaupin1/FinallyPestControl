import React, { Component } from 'react';
import ant from '../../assets/carousel/carousel-ant.png';
import banner from '../../assets/carousel/carousel-banner.png';
import bee from '../../assets/carousel/carousel-bee.png';
import {BannerSlide} from './sub-components/Slide';

export default class carousel extends Component {
	render() {
		return (
		<div id="main-slider">

    		<div id="carousel-example" className="carousel slide" data-ride="carousel">

           		<div className="carousel-inner">
           			<BannerSlide active image={ant} caption="Ants are not your friend, contact us now!"/>
           			<BannerSlide image={bee} caption="Dont wait to get stung, contact us now!"/>
           			<BannerSlide image={banner}/>
	                
            	</div>

	            <ol className="carousel-indicators">
	                <li data-target="#carousel-example" data-slide-to="0" className="active"></li>
	                <li data-target="#carousel-example" data-slide-to="1"></li>
	                <li data-target="#carousel-example" data-slide-to="2"></li>
	            </ol>
	            
    		</div>
		</div>
		);
	}
}
