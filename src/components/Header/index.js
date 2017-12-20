import React, { Component } from 'react';
import Logo from './sub-components/Logo';
import MenuChoice from './sub-components/MenuChoice';
import SocialLinksBar from './sub-components/SocialLinksBar'
import "./header.css";

export default class index extends Component {
	render() {
		return (
			<div className="header">
                <div className="navbar navbar-default navbar-fixed-top menu-back">
                    <div className="container">
                        <Logo />
                        <div className="navbar-collapse collapse" >
                            <ul className="nav navbar-nav navbar-right">
                                <MenuChoice target="/" mainText="HOME PAGE"/>
                                <MenuChoice target="lawn" mainText="LAWN CARE"/>
                                <MenuChoice target="tree" mainText="TREE & SHRUB CARE"/>
                                <MenuChoice target="mosquito" mainText="MOSQUITO CONTROL"/>
                                <MenuChoice target="perimeter"  mainText="PERIMETER PEST"/>
                                <MenuChoice target="contact"  mainText="CONTACT"/>
                            </ul>
                        </div>


                    </div>
                </div>
                <SocialLinksBar
                    email="beegreengrass@gmail.com"
                    phone="+1-317-660-8794"
                    // country="USA"
                    facebookURL="https://www.facebook.com/beegreengrass/"
                    linkedinURL=""
                    pinterestURL=""
                    youtubeURL=""
                />

            </div>
		);
	}
}
