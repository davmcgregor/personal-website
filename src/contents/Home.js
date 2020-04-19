import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/david_mcgregor.jpg';
import Social from '../components/Social'

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
      <img src={profilepic} className="profilepic"></img>
      <h1>Hi! I'm David McGregor.</h1>
      <h2>I'm a junior software developer based in London.</h2>

      {/* <ReactTypingEffect className="typingeffect" text={['Junior Software Developer']} speed={100}/> */}
      <br />
      <Social />
      </div>
      )
    }
  }
    
    export default Home
    
