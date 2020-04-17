import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
  render() {
    return (
        <div className="condiv contact">
        <h1 className="subtopic">Get in touch:</h1>
        <h3>Email  :   davidjohnmcgregor@gmail.com</h3>
        <h3>Phone   :   07863 077495</h3>
        <div className="mobilesocial">
        <Social />
        </div>
        </div>
        )
    }
  }
    
export default Contact
    