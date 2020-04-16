import React, { Component } from 'react';
import Social from '../components/Social';

class About extends Component {
  render() {
    return (
      <div className="condiv">
      <h1 className="subtopic">David McGregor</h1>
      <p>I am a software developer and tech enthusiast, having recently graduated 
        from the intensive <strong>Makers Academy</strong> web development course (I've blogged about 
        the experience <a class="link" href="https://blog.makersacademy.com/tips-to-max-your-learning-5e363517acfb" target="_blank">here</a>). 
      </p>
      <br />
      <p>
        My love of coding grew over the six years I worked as a digital communications specialist, 
        where I advised political, government and non-profit organisations back home in Australia. 
      </p>
      <br />
      <p>
        Now I'm looking to join a team where I can work on new challenges, expand my programming 
        knowledge and build great technology.
      </p>
      <Social />
      </div>
    )
  }
}
    
export default About
    