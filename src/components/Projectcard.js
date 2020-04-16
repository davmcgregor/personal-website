import React, { Component } from 'react'

class Projectcard extends Component {
  render() {
    return (
      <div class="widecard">
        <div class="compdet">
          <a class="link" href={this.props.link}><h2 align="center">{this.props.title}</h2></a>
          <p class="secondtext">{this.props.description}.</p>
          <a class="link" href={this.props.link}><img class="projectimage" src={this.props.image}/></a>
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
    