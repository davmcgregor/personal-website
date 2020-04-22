import React, { Component } from 'react'

class Skills extends Component {
  constructor(props)
  {
      super(props);
      this.state={
          'myskills':{ 
            JavaScript: ["JavaScript", "jQuery", "ReactJS", "Node.js", "Jasmine", "Jest", "Enzyme", "ESLint", "Mocha", "Chai"],
            Ruby: ["Ruby", "Rails", "RSpec", "Sinatra", "Capybara", "Rubocop"],
            TechSkills: ["SQL", "APIs", "AWS", "Git", "TravisCI", "CodeClimate", "Heroku", "Netlify", "HTML", "CSS", "Bootstrap"],
            OtherSkills: ["Agile methodology", "Test-driven development", "Process diagramming"]
         }
      };
  }

  render() {
    return (
        <div className="condiv skills">
        <h1 className="subtopic">Skills</h1>
        <h3>JavaScript</h3>
        <ul>
        {this.state.myskills.JavaScript.map((key)=>{
            return <li className="animated slideInLeft skills">{key}</li>
        })}
        </ul>

        <br />
        <h3>Ruby</h3>
        <ul>
        {this.state.myskills.Ruby.map((key)=>{
            return <li className="animated slideInLeft skills">{key}</li>
        })}
        </ul>

        <br />
        <h3>Tech Skills</h3>
        <ul>
        {this.state.myskills.TechSkills.map((key)=>{
            return <li className="animated slideInLeft skills">{key}</li>
        })}
        </ul>

        <br />
        <h3>Other</h3>
        <ul>
        {this.state.myskills.OtherSkills.map((key)=>{
            return <li className="animated slideInLeft skills">{key}</li>
        })}
        </ul>
        </div>
        )
    }
}

export default Skills
