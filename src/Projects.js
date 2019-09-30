import React, { Component } from 'react';

const form_image = require('./FORM.png');
const portfolio_image = require('./CSS Portfolio.png');


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        let projects = [
            {link: 'https://github.com/MustafaAnasKH99/Pure-JS-Form', image: form_image, title: 'Data collecting form developed with HTML, CSS, and JS with a table displaying a summary of the collected data.'},
            {link: 'https://github.com/MustafaAnasKH99/Responsive-HTML-CSS-template', image: portfolio_image, title: 'Responsive one page portfolio written with HTML and designed with pure CSS'},
        ]
        return(
            projects.map(e => {
                return (
                    <div className="column project-wrapper">
                        <a className="project-title" href={e.link} target="_blank" rel="noopener noreferrer">
                            <figure>
                                <img src={e.image} alt="PRO" className="project-image"/>
                            </figure>
                            <h1>{e.title}</h1>
                        </a>
                    </div>
                )
            })
        )
    }
}
 
export default Projects;