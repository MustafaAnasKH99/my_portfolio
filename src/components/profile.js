import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';

import { increment } from '../Queries/visitsIncrementor'

const profile = require('../assets/profile.jpg');

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.props.increment({})
    }

    render() { 
        return (
                <div className="profile-figure-wrapper">
                    <figure className="image is-230x230">
                        <img id="img" src={profile} alt="profile" className="profile-picture-wrapper image is-rounded profile-image-container" />
                    </figure>
                </div>
         );
    }
}
 
export default compose(
    graphql(increment, {name: "increment"})
)(Profile)