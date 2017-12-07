import React, { Component } from 'react';
import './slide.css';

export class BannerSlide extends Component {
	render() {
		return (
			<div className={"item " + (this.props.active?"active":"")}>
                <img src={this.props.image} alt="" />
                <div className="carousel-caption">
                	{this.props.caption?
                		<h4 className="back-light">{this.props.caption}</h4>:null}
                        <div className="col-lg-8 col-md-8 col-sm-8"></div>

                        <div className="col-lg-6 col-md-6 col-sm-6" >
                           <form>
                               <div className="row">
                                   <div className="col-lg-6 col-md-6 col-sm-6 ">
                                       <div className="form-group frontForm">First Name
                                           <input id="form-name" type="text" className="form-control" required="required" placeholder="First Name" name="name"/>
                                       </div>
                                       <div className="form-group frontForm">Last Name
                                           <input id="form-name" type="text" className="form-control" required="required" placeholder="Last Name" name="name"/>
                                       </div>
                                       <div className="form-group frontForm">Phone Number
                                           <input id="form-name" type="text" className="form-control" required="required" placeholder="Phone Number" name="name"/>
                                       </div>
                                       <div className="form-group frontForm">Email
                                           <input id="form-name" type="text" className="form-control" required="required" placeholder="Email Address" name="name"/>
                                       </div>
                                   </div>
                                   <div className="col-lg-6 col-md-6 col-sm-6">
                                       <div className="form-group frontForm">Address
                                           <input id="form-email" type="text" className="form-control" required="required" placeholder="Address" name="email"/>
                                       </div>
                                       <div className="form-group frontForm">City
                                           <input id="form-email" type="text" className="form-control" required="required" placeholder="City" name="email"/>
                                       </div>
                                       <div className="form-group frontForm">State
                                           <input id="form-email" type="text" className="form-control" required="required" placeholder="State" name="email"/>
                                       </div>
                                       <div className="form-group frontForm">Zip Code
                                           <input id="form-email" type="text" className="form-control" required="required" placeholder="Zip Code" name="email"/>
                                       </div>
                                   </div>
                               </div>
                               <div className="row">
                                   <div className="col-lg-12 col-md-12 col-sm-12">
                                       <div className="form-group">
                                           <textarea name="message" id="form-message" required="required" className="form-control" rows="4" placeholder="Message"></textarea>
                                       </div>
                                       <div className="form-group">
                                           <button onClick={this.handleSubmit} type="button" className="btn btn-success">Get Quote Today!</button>
                                       </div>
                                   </div>
                               </div>
                           </form>
                       </div>

                </div>
            </div>
		);
	}
}

export class TestimonialSlide extends Component {
    render() {
        return (
            <div className={"item " + (this.props.active?"active":"")}>
                <div className="container center">
                    <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 slide-custom">
                        <h3>
                            <i className="fa fa-quote-left"></i>
                            {this.props.text}
                            <i className="fa fa-quote-right"></i>
                        </h3>
                        <h5>
                            <strong className="c-black">
                                {this.props.author}
                            </strong>
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}
