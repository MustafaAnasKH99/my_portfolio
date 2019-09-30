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
            <p className="about-me-par">
            I do <span className="changing-word subtitle">{this.state.do}</span>
            </p>
        </div>
      );
    }
  }

  export default Timer;