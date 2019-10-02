import React, { Component } from 'react';

const form_image = require('../assets/FORM.png');
const sheetjs_img = require('../assets/sheetjs.png');
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
                code_link: 'https://github.com/MustafaAnasKH99/Sheets-DOM-Manipulation', 
                image: sheetjs_img, 
                online_link: 'https://mustafaanaskh99.gitlab.io/sheetjs-dom/',
                title: `
                1 Page Javascript Web Application. In this web page, the user is able to
                add data by filling few input fields,
                upload and excel sheet and add its data,
                view the added data in an HTML table,
                delete table fields by clicking on them,
                and exporting the html table with all its content as an excel sheet.
                `
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
                    <div>
                        <div className="card card-edited">
                        <header className="card-header">
                            <a href={e.code_link} className="card-footer-item" target="_blank" rel="noopener noreferrer">Go to Code</a>
                            <a href={e.online_link} className="card-footer-item" target="_blank" rel="noopener noreferrer">Browse deployed</a>
                            </header>
                            <div class="card-image card-image-edited">
                                <figure class="image is-4by3">
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
            })
        )
    }
}
 
export default Projects;