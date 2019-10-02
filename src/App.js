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
        <div className="columns is-vcentered">

          <div className="column is-1">
          </div>

          <div className="column"></div>
          <div className="column"></div>
          <div className="column is-6">
            <About />
          </div>

          <div className="column">
              <Links />
            </div>
          
          <Profile />
          <div className="column"></div>

        </div>

      <section className="projects-section level">
        <div className="columns">
        <div className="column"></div>
          <Projects />
        <div className="column"></div>
        </div>
      </section>

      </section>
    </div>
  );
}

export default App;
