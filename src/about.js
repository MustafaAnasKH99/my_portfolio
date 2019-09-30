import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1 className="title" id="my-profile-name">This is Mustafa</h1>
                <p className="about-me-par">
                    I am a Full Stack Developer with experience building websites, Progresssing Web Apps, and Data Management Systems.
                </p>
                <h1 className="subtitle">Hire Me!</h1>
            </div>
         );
    }
}
 
export default About;