import React from 'react';
import DevLogo from './dev.svg'

const Links = () => {
    return ( 
        <div>
                      <span class="icon">
            <a href="http://linkedin.com/in/mustafa-kharnoub/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin"></i>
            </a>
          </span>

            <span class="icon">
              <a href="http://github.com/MustafaAnasKH99" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i>
              </a>
            </span>

            <span class="icon">
              <a href="http://gitlab.com/MustafaAnasKH99/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-gitlab"></i>
              </a>
            </span>

            <span class="icon">
              <a href="http://facebook.com/MustafaAnasKH99" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-facebook-f"></i>
              </a>
            </span>

            <span class="icon">
              <a href="http://facebook.com/MustafaAnasKH99" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-medium-m"></i>
              </a>
            </span>

            <span class="icon">
              <a href="http://dev.to/mustafaanaskh99/" target="_blank" rel="noopener noreferrer">
                <img src={DevLogo} alt="Dev.to" />
              </a>
            </span>
        </div>
     );
}
 
export default Links;