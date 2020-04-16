import React, { Component } from 'react'

class Widecard extends Component {
  render() {
    return (
      <div class="widecard">
      <div class="compdet">
      <h2>{this.props.title} ({this.props.from} - {this.props.to})</h2>
      <p class="secondtext">{this.props.details}</p>
      </div>
      </div>
    )
  }
}
    
export default Widecard
    