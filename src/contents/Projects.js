import React, { Component } from 'react';
import Projectcard from '../components/Projectcard';
import wanderlistgif from '../img/wanderlist.gif';


class Projects extends Component {
  render() {
    return (
        <div className="condiv">
        <h1 className="projectsheader">Projects</h1>
        <Projectcard title="WanderList" 
        githublink="https://github.com/davmcgregor/Wanderlist" 
        link="https://wanderlist-makers.herokuapp.com/"
        description="Save your favourite walking routes, search routes near you and vote for your favourites. This is a Final Group project utilisng the Google Maps, Directions and Places APIs." 
        image= {wanderlistgif}
        techstack={["Ruby", "Rails", "JavaScript", "jQuery", "Jasmine", "postgreSQL", "RSpec", "Capybara", "Travis CI", "Heroku", "Rubocop", "Code Climate"]} 
        />
        </div>
        )
    }
  }
    
export default Projects