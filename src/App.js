import React from 'react'

import './bulma.css'
import './main.css'

import Profile from './profile'
import About from './about'
import Timer from './timer'
import Links from './Links'


function App() {
  return (
    <div className="App">
        
      <section className="hero main-section-here">
        <div className="columns is-vcentered">

          <div className="column is-1">
            <Links />
          </div>

          <div className="column"></div>
          <div className="column"></div>
          <div className="column is-6">
            <About />
            <Timer  />
          </div>
          
          <Profile />
          <div className="column"></div>

        </div>
      </section>
    </div>
  );
}

export default App;
