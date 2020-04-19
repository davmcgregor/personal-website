import React, { Component } from 'react'

class Projectcard extends Component {
  render() {
    return (
      <div class="widecard">
        <div class="compdet">
          <h2 align="center">{this.props.title}</h2>
          <p class="secondtext">{this.props.description}</p> 
          <div class="projectlinks">
            <a class="link" href={this.props.link} target="_blank">
              <h3><i class="fas fa-link"></i> <u>Live Link</u></h3>
            </a>  
            <a class="link" href={this.props.githublink} target="_blank">
              <h3><i class="fab fa-github"></i> <u>Github</u></h3>
            </a>
          </div>
          <br />
          <img class="projectimage" src={this.props.image}></img>
          <br />
          <h3>Development & Testing</h3>
          <p class="secondtext">{this.props.development}</p>
          <br />
          <h3>Code Quality & Deployment</h3>
          <p class="secondtext">{this.props.deployment}</p>
        </div>
      </div>
    )
  }
}
    
export default Projectcard
    