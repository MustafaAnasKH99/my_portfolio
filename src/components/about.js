import React, { Component } from 'react';
import Timer from './timer'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
          
             
        return ( 
            <div className="about-container">
                <h1 className="title" id="my-profile-name">Mustafa 👽</h1>
                <h2 className="subtitle"><Timer /></h2>
                <p className="about-me-par">
                I am a passionate and self-driven Junior Full-Stack developer. I have experience building various web platforms and systems ranging from chatapps to learning/contement management systems. I have deep appreciation 💟 for the open source communtiy and I try my best to help (Hit me up in you need any!)
                </p>
                <br />
                <a className="button is-primary is-large is-outlined" href="mailto:me@mustafaanas.com?Subject=Job%20Opportunity" target="_top"><strong>Hire Me 🚀 </strong></a>
            </div>
         );
    }
}
 
export default About;