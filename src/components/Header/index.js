import React, { Component } from 'react';
import "./header.css";

export default class index extends Component {
	render() {
		return (
			<div className="header">
   <div className="navbar navbar-default navbar-fixed-top menu-back">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

                <a className="navbar-brand" href="#">
                    <img src="assets/img/logo.png" className="navbar-brand-logo " alt="" />
                </a>
            </div>
            <div className="navbar-collapse collapse" >
                <ul className="nav navbar-nav navbar-right">
                   
                    <li className="dropdown">
                        <a href="index1.html">HOME PAGE<i className="fa fa-folder-open-o"></i>
                            <span>replace this text</span>

                        </a>
                        <ul className="dropdown-menu dropdown-menu-left">
                            <li>
                                <a href="index1.html">
                                    <i className="fa fa-paperclip"></i>Home Page One
              <span>replace this text</span>
                                </a>

                            </li>
                            <li>
                                <a href="index2.html">
                                    <i className="fa fa-comments-o"></i>Home Page Two
              <span>replace this text</span>
                                </a>

                            </li>
                          

                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="our-services.html">ABOUT US<i className="fa fa-folder-open-o"></i>
                            <span>replace this text</span>

                        </a>
                        <ul className="dropdown-menu dropdown-menu-left">
                            <li>
                                <a href="our-services.html">
                                    <i className="fa fa-edit"></i>Our Services
              <span>replace this text</span>
                                </a>

                            </li>
                            <li>
                                <a href="team-members.html">
                                    <i className="fa fa-bullhorn"></i>Team Members 
              <span>replace this text</span>
                                </a>

                            </li>
                          

                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="#">PORTFOLIO<i className="fa fa-image"></i>
                            <span>replace this text</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-left">

                            <li>
                                <a href="4column-portfolio.html">
                                    <i className="fa fa-paper-plane-o"></i>Four Column 
              <span>replace this text</span>
                                </a>

                            </li>
                            <li>
                                <a href="3column-portfolio.html">
                                    <i className="fa fa-folder-open-o"></i>Three Column
              <span>replace this text</span>
                                </a>

                            </li>
                            <li>
                                <a href="2column-portfolio.html">
                                    <i className="fa fa-bullhorn"></i>Two Column
              <span>replace this text</span>
                                </a>

                            </li>
                        </ul>
                    </li>

                   
                    <li className="dropdown">
                        <a href="#">EXTRAS <i className="fa fa-bars"></i>
                            <span>replace this text</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-left">

                            <li>
                                <a href="error.html">
                                    <i className="fa fa-power-off"></i>404 Error
              <span>replace this text</span>
                                </a>

                            </li>
                             <li>
                                <a href="pricing.html">
                                    <i className="fa fa-tag"></i>Pricing Options
              <span>replace this text</span>
                                </a>

                            </li>
                            <li>
                                <a href="blog-home.html">
                                    <i className="fa fa-map-marker"></i>Blog Home
              <span>replace this text</span>
                                </a>

                            </li>
                            <li>
                                <a href="blog-single.html">
                                    <i className="fa fa-flask"></i>Blog Single
              <span>replace this text</span>
                                </a>

                            </li>
                           
                           
                           
                        </ul>
                    </li>
                     <li className="dropdown">
                        <a href="contact.html">CONTACT <i className="fa fa-globe"></i>
                            <span>replace this text</span>
                        </a>

                    </li>
                </ul>
            </div>

        </div>
    </div> 
</div>
		);
	}
}
