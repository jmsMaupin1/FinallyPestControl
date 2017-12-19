import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class App extends Component {
  render() {
    return (
        <div>
            <Header/>
                {React.cloneElement(this.props.children, {...this.props})}   
            <Footer/>
        </div>
    );
  }
}