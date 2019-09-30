import React, { Component } from 'react';
const profile = require('./profile.jpg');

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="column is-4"> 
                <figure className="image is-230x230">
                    <img src={profile} alt="profile" className="image is-rounded profile-image-container" />
                </figure>
            </div>
         );
    }
}
 
export default Profile;