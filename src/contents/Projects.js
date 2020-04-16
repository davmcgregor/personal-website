import React, { Component } from 'react';
import Projectcard from '../components/Projectcard';

class Projects extends Component {
  render() {
    return (
        <div className="condiv">
        <h1 className="subtopic">Projects:</h1>
        <Projectcard title="WanderList" 
        link="https://github.com/davmcgregor/Wanderlist" 
        description="Save your favourite walking routes, search routes near you and vote for your favourites. This is a Final Group project utilisng the Google Maps, Directions and Places APIs." 
        image="https://raw.githubusercontent.com/davmcgregor/CV/master/screenshots/WanderList_header.png"
        development="Ruby, Rails, JavaScript, jQuery, Jasmine, ActiveRecord (postgreSQL), RSpec, Capybara" 
        deployment="Travis CI, Heroku, Rubocop, Code Climate"/>
        </div>
        )
    }
  }
    
export default Projects