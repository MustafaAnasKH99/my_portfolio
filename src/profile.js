import React, { Component } from 'react';
const profile = require('./profile.jpg');

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="column"> 
                <div className="profile-image-container">
                    <figure className="image">
                        <img src={profile} alt="profile" className="is-rounded" />
                    </figure>
                </div>
            </div>
         );
    }
}
 
export default Profile;