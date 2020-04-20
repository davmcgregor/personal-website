import React, { Component } from 'react';
import Projectcard from '../components/Projectcard';

class Projects extends Component {
  render() {
    return (
        <div className="condiv">
        <h1 className="subtopic">Projects</h1>
        <Projectcard title="WanderList" 
        githublink="https://github.com/davmcgregor/Wanderlist" 
        link="https://wanderlist-makers.herokuapp.com/"
        description="Save your favourite walking routes, search routes near you and vote for your favourites. This is a Final Group project utilisng the Google Maps, Directions and Places APIs." 
        image="../img/wanderlist.gif"
        development="Ruby, Rails, JavaScript, jQuery, Jasmine, ActiveRecord (postgreSQL), RSpec, Capybara" 
        deployment="Travis CI, Heroku, Rubocop, Code Climate"/>
        </div>
        )
    }
  }
    
export default Projects