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
                                <MenuChoice mainText="HOME PAGE" subText="replace this text"/>
                                <MenuChoice mainText="ABOUT US" subText="replace this text"/>
                                <MenuChoice mainText="PORTFOLIO" subText="replace this text"/>
                                <MenuChoice mainText="EXTRAS" subText="replace this text"/>
                                <MenuChoice mainText="CONTACT" subText="replace this text"/>
                            </ul>
                        </div>
                    </div>
                </div>
                <SocialLinksBar 
                    email="marcus@finallypestcontrol.com"
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
