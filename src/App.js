import React from 'react'

import './bulma.css'
import './main.css'

import Profile from './components/profile'
import About from './components/about'
import Links from './components/Links'
import Projects from './components/Projects'


function App() {
  return (
    <div className="App">
      <section className="hero main-section-here">
        <div className="columns main-columns-wrapper">

          <div className="column columns">
            <div className="column is-full">
            <div className="column columns about-me-wrapper">
              <div className="column is-5">
                <About />
              </div>

              <div className="column is-1">
                <Links />
              </div>


              <Profile />
              </div>
              <div className="columns projects-wapper">
                <Projects />
              </div>
            </div>
          </div>


          {/* <div className="column is-12 columns">
            <div className="column is-full columns">
              <div className="column is-full">

                <div className="column is-5">
                  <About />
                </div>

                <div className="column is-1">
                  <Links />
                </div>

          
              <Profile />
              </div>

            </div>
            <Projects />
          </div> */}

        

        </div>
          {/* <section className="projects-section">
            <div className="columns">
            <div className="column"></div>
              <Projects />
            <div className="column"></div>
            </div>
          </section> */}

  
      </section>
    </div>
  );
}

export default App;
