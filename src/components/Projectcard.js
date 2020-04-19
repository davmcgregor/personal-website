import React, { Component } from 'react'

class Projectcard extends Component {
  render() {
    return (
      <div class="widecard">
        <div class="compdet">
          <h2 align="center">{this.props.title} <a class="projectlinks" href={this.props.githublink} target="_blank"><i class="fab fa-github"></i></a>  <a class="projectlinks"href={this.props.link} target="_blank"><i class="fas fa-link"></i></a></h2>
          <p class="secondtext">{this.props.description}</p>
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
    