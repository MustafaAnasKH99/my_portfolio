import React from 'react';

import './bulma.css';
import './main.css';

import Profile from './profile';
import About from './about';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-edited" role="navigation" aria-label="main navigation" >
          <a href="/#" className="navbar-item navbar-item-edited">Something</a>
        </nav>
      <section className="hero is-dark">
        <div className="columns is-vcentered">
          <div className="column">

          </div>

          <About />
          <Profile />

          <div className="column">

          </div>

        </div>
      </section>
    </div>
  );
}

export default App;
