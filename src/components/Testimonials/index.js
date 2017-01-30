import React, { Component } from 'react';

export default class index extends Component {
	render() {
		return (
			<div className="testimonials">
				<div className="containers">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<h1>Clients Testimonials</h1>
                    <div className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li data-target="#testimonials" data-slide-to="0" className=""></li>
                            <li data-target="#testimonials" data-slide-to="1" className=""></li>
                            <li data-target="#testimonials" data-slide-to="2" className="active"></li>
                        </ol>

                        <div className="carousel-inner">
                            <div className="item">
                                <div className="container center">
                                    <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 slide-custom">

                                        <h4><i className="fa fa-quote-left"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit onec molestie non sem vel condimentum. <i className="fa fa-quote-right"></i></h4>
                                        <div className="user-img pull-right">
                                            <img src="assets/img/user.gif" alt="" className="img-u image-responsive" />
                                        </div>
                                        <h5 className="pull-right"><strong className="c-black">Lorem Dolor</strong></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="container center">
                                    <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 slide-custom">
                                        <h4><i className="fa fa-quote-left"></i>Aenean faucibus luctus enim. Duis quis sem risu suspend lacinia elementum nunc. <i className="fa fa-quote-right"></i></h4>
                                        <div className="user-img pull-right">
                                            <img src="assets/img/user2.png" alt="" className="img-u image-responsive" />
                                        </div>
                                        <h5 className="pull-right"><strong className="c-black">Faucibus luctus</strong></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="item active">
                                <div className="container center">
                                    <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 slide-custom">
                                        <h4><i className="fa fa-quote-left"></i>Sed ultricies, libero ut adipiscing fringilla, ante elit luctus lorem, a egestas dui metus a arcu condimentum. <i className="fa fa-quote-right"></i></h4>
                                        <div className="user-img pull-right">
                                            <img src="assets/img/user.gif" alt="" className="img-u image-responsive" />
                                        </div>
                                        <h5 className="pull-right"><strong className="c-black">Sed ultricies</strong></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
						</div>
					</div>
				</div>				
			</div>
		);
	}
}
