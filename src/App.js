import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import './bulma.css'
import './main.css'

import Profile from './components/profile'
import About from './components/about'
import Links from './components/Links'
import Projects from './components/Projects'
import Articles from './components/articles'

const client = new ApolloClient({
  uri: 'https://mysterious-dusk-78499.herokuapp.com/bemyguest'
})

function App() {
  return (
    <ApolloProvider client={client}>
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
              <Projects />
              <div>

                <div className="message">
                  <h2 className="message-header"><strong>I try to share the knowledge I have, so I write</strong></h2>
                  <p className="message-body">
                  <Articles className="column is-1" />
                  </p>
                </div>
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
    </ApolloProvider>
  );
}

export default App;
