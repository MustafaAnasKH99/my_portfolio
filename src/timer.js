import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
      super(props);
        this.state = {
          do: 'Javascript'
        };
    }

    tick() {
        let skills = ['Javascript', 'HTML', 'CSS', 'React', 'Flutter', 'Mongoo', 'SQL', 'GraphQL', 'Apollo'];
        var item = skills[Math.floor(Math.random()*skills.length)];

        this.setState({
            do: item,
        });
    }

    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return (
        <div>
            I'm a <span className="changing-word subtitle is-italic">{this.state.do}</span> developer.
            
        </div>
      );
    }
  }

  export default Timer;