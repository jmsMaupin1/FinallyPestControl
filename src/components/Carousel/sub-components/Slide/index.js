import React, { Component } from 'react';
import './slide.css';

export class TestimonialSlide extends Component {
    render() {
        return (
            <div className={"item " + (this.props.active?"active":"")}>
                <div>
                    <div className="slide-custom">
                        <h3>
                            <i className="fa fa-quote-left"></i>
                            {" " + this.props.text + " "}
                            <i className="fa fa-quote-right"></i>
                        </h3>
                        <br/>
                        <br/>
                        <h4>
                            <strong className="c-black">
                                - {this.props.author}
                            </strong>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}
