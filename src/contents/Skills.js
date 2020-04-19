import React, { Component } from 'react'

class Skills extends Component {
  constructor(props)
  {
      super(props);
      this.state={
          'myskills':["JavaScript", "ReactJS", "Node.js", "APIs", "Jasmine", "Ruby", "Rails", "Sinatra", "RSpec", "Capybara", "PostgreSQL", "HTML/CSS", "TravisCI", "Heroku"]
      };
  }

  render() {
    return (
        <div className="condiv skills">
        <h1 className="subtopic">Skills</h1>
        <ul>
        {this.state.myskills.map((value)=>{
            return <li className="animated slideInLeft">{value}</li>
        })}
        </ul>
        </div>
        )
    }
}

export default Skills
