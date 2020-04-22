import React, { Component } from 'react'

class Projectcard extends Component {
  render() {
    return (
      <div className="widecard">
        <div className="compdet">
          <h2 align="center">{this.props.title}</h2>
          <p className="secondtext">{this.props.description}</p> 
          <div className="projectlinks">
            <a className="link" href={this.props.link} target="_blank">
              <h3><i class="fas fa-link"></i> <u>Live Link</u></h3>
            </a>  
            <a className="link" href={this.props.githublink} target="_blank">
              <h3><i class="fab fa-github"></i> <u>Github</u></h3>
            </a>
          </div>
          <br />
          <img className="projectimage" src={this.props.image}></img>
          <h3>Tech stack</h3>
          <ul>
          {this.props.techstack.map((value)=>{
              return <li className="techstack">{value}</li>
          })}
        </ul>
          
        </div>
      </div>
    )
  }
}
    
export default Projectcard
    