import React, { Component } from 'react';

import projects from './data'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        return(
            <div className="columns is-multiline">
            {projects.map(e => {
                return (
                    <div className="column is-one-third">
                        <div className="card card-edited">
                        <header className="card-header">
                            <a href={e.code_link} className="card-footer-item" target="_blank" rel="noopener noreferrer">Go to Code</a>
                            <a href={e.online_link} className="card-footer-item" target="_blank" rel="noopener noreferrer">Browse deployed</a>
                            </header>
                            <div className="card-image card-image-edited">
                                <figure className="image is-4by3">
                                <img src={e.image} alt="screenshot of the project landing page" />
                                </figure>
                            </div>
                            <div className="card-content card-content-edited">
                            <div className="content">
                                <p className="card-par-content">
                                    {e.title}
                                </p>
                                <br />
                            </div>
                            </div>
                            
                        </div>
                    </div>
                )
            })}
            </div>
        )
    }
}
 
export default Projects;