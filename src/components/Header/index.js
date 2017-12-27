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
                                <MenuChoice target="/" mainText="HOME"/>
                                <MenuChoice target="lawn" mainText="ABOUT"/>
                                <MenuChoice target="tree" mainText="SERVICES"/>
                                <MenuChoice target="mosquito" mainText="GALLERY"/>
                                <MenuChoice target="contact"  mainText="CONTACT"/>
                            </ul>
                        </div>


                    </div>
                </div>
                <SocialLinksBar
                    email="terebinthtreecare@att.net"
                    phone="+1-317-507-4197"
                    // country="USA"
                    facebookURL="https://www.facebook.com/TerebinthTreeCare/"
                    linkedinURL=""
                    pinterestURL=""
                    youtubeURL=""
                />

            </div>
		);
	}
}
