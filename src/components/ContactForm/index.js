import React, { Component } from 'react';

export default class index extends Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12"  style={{color: "white"}}>
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
                        <button onClick={this.handleSubmit} type="button" className="col-lg-offset-4 btn btn-success">Get Quote Today!</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    );
  }
}
