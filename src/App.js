import React from 'react';

import './bulma.css';
import './main.css';

import Profile from './profile';
import DevLogo from './dev.svg'
import About from './about';
import Timer from './timer';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-edited" role="navigation" aria-label="main navigation" >
          <a href="/#" className="navbar-item navbar-item-edited">Something</a>
        </nav>
      <section className="hero is-dark main-section-here">
        <div className="columns is-vcentered">

          <div className="column is-1 float-left">

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
          <div className="column"></div>
          <div className="column"></div>
          <div className="column is-6">
            <About />
            <Timer  />
          </div>
          
          <Profile />
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>

        </div>
      </section>
    </div>
  );
}

export default App;
