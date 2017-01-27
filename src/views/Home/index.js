import React, { Component } from 'react';
import ant from '../../assets/carousel/carousel-ant.png';
import banner from '../../assets/carousel/carousel-banner.png';
import bee from '../../assets/carousel/carousel-bee.png';
import './home.css'

export default class index extends Component {
	render() {
		return (
			<div id="main-slider">

        <div id="carousel-example" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">
                <div className="item active">

                    <img src={ant} alt="" />
                    <div className="carousel-caption ">
                        <h4 className="back-light">Aenean faucibus luctus enim. Duis quis sem risu suspend lacinia elementum nunc.
                        </h4>
                    </div>
                </div>
                <div className="item">
                    <img src={bee} alt="" />
                    <div className="carousel-caption ">
                        <h4 className="back-light">Faucibus luctus enim. Duis quis sem risu suspend lacinia elementum nunc.
                        </h4>
                    </div>
                </div>
                <div className="item">
                    <img src={banner} alt="" />
                    <div className="carousel-caption ">
                        <h4 className="back-light">Cenean faucibus luctus enim. Duis quis sem risu suspend lacinia elementum nunc.
                        </h4>
                    </div>
                </div>
            </div>
            {/*INDICATORS*/}
            <ol className="carousel-indicators">
                <li data-target="#carousel-example" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example" data-slide-to="1"></li>
                <li data-target="#carousel-example" data-slide-to="2"></li>
            </ol>
            {/*PREVIUS-NEXT BUTTONS*/}
            <a className="left carousel-control" href="#carousel-example" data-slide="prev">
                <i className="fa fa-angle-left fa-3x control-icon clr-main"></i>
            </a>
            <a className="right carousel-control" href="#carousel-example" data-slide="next">
                <i className="fa fa-angle-right fa-3x control-icon clr-main"></i>
            </a>
        </div>

    </div>
		);
	}
}
