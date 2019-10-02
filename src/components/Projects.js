import React, { Component } from 'react';

const form_image = require('../assets/FORM.png');
const portfolio_image = require('../assets/CSS Portfolio.png');


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        let projects = [
            {
                code_link: 'https://github.com/MustafaAnasKH99/Pure-JS-Form', 
                image: form_image, 
                online_link: 'https://mustafaanaskh99.gitlab.io/javascript-form/',
                title: 'Data collecting form developed with HTML, CSS, and JS with a table displaying a summary of the collected data.'
            },
            {
                code_link: 'https://github.com/MustafaAnasKH99/Responsive-HTML-CSS-template', 
                image: portfolio_image, 
                online_link: 'https://mustafaanaskh99.gitlab.io/respon/',
                title: 'Responsive one page portfolio written with HTML and designed with pure CSS'
            },
        ]
        return(
            projects.map(e => {
                return (
                    <div className="column">
                        <div className="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                <img src={e.image} alt="screenshot of the project landing page" />
                                </figure>
                            </div>
                            <div className="card-content">
                            <div className="content">
                                {e.title}
                                <br />
                            </div>
                            </div>
                            <footer className="card-footer">
                            <a href={e.code_link} className="card-footer-item" target="_blank" rel="noopener noreferrer">Go to Code</a>
                            <a href={e.online_link} className="card-footer-item" target="_blank" rel="noopener noreferrer">Browse deployed</a>
                            </footer>
                        </div>
                    </div>
                )
            })
        )
    }
}
 
export default Projects;