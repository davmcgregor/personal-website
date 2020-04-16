import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
  render() {
    return (
        <div className="condiv">
        <h1 className="subtopic">Education</h1>
        <Widecard title="Makers Academy" where="London, UK" details="A selective 16-week coding bootcamp, focusing on teaching the fundamentals of software engineering." from="Dec '19" to="Apr '20"/>
        <Widecard title="Harvard Kennedy School Executive Education" where="Online Program" details="Community Organising intensive delivered by Professor Marshall Ganz." from="Feb '17" to="May '17"/>
        <Widecard title="The University of Melbourne" where="Australia" details="Juris Doctor (Law)" from="Jan '10" to="Mar '13"/>
        <Widecard title="The University of Sydney" where="Australia" details="Bachelor of Commerce (Economics and International Business)" from="Jan '07" to="Dec '09"/>
        </div>
        )
    }
  }
    
export default Education