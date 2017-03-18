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
                                <MenuChoice target="/" mainText="HOME PAGE" subText=""/>
                                <MenuChoice target="contact"  mainText="CONTACT" subText=""/>
                            </ul>
                        </div>
                    </div>
                </div>
                <SocialLinksBar 
                    email="finallypestcontrol@gmail.com"
                    phoneno="+1-317-508-7464"
                    country="USA"
                    facebookURL=""
                    linkedinURL=""
                    pinterestURL=""
                />
            </div>
		);
	}
}
