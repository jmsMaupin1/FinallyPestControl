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
                                <MenuChoice target="/" mainText="HOME PAGE" subText="Check out our home page"/>
                                <MenuChoice target="contact"  mainText="CONTACT" subText="Feel free to contact us"/>
                                <li><a href="https://app.acuityscheduling.com/schedule.php?owner=13546773">SCHEDULE<i className="fa fa-folder-open-o"></i><span>Non-DCS schedule here</span></a></li>
                                <li>
                                    <a 
                                        href="https://finallypestcontrolllc.acuityscheduling.com/schedule.php?appointmentType=3499984" 
                                        target="_blank"
                                        style={{
                                         background: "#469d6e",
                                         color: '#fff',
                                        padding: '8px 12px',
                                         border: '0px',
                                         boxShadow: '0 -2px 0 rgba(0,0,0,0.15) inset',
                                         borderRadius: "4px",
                                         textDecoration: "none",
                                         display: "inline-block"}}>
                                        Schedule Appointment
                                    </a>
                                    <br/>
                                    <span>
                                    <a href="https://finallypestcontrolllc.acuityscheduling.com/schedule.php?appointmentType=3499984" style={{color: "white"}}>
                                        DCS Scheduling
                                    </a>
                                    </span>
                                </li>
                            </ul>
                        </div>

                    
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