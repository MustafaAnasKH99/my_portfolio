import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="column">
              <h1 className="title is-primary">This is Mustafa</h1>
              <p>I am a Full Stack Developer!</p>
              <h1 className="subtitle">Hire Me!</h1>
          </div>
         );
    }
}
 
export default About;