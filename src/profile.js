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
                <div className="profile-picture-wrapper">
                    <figure className="image is-230x230">
                        <img id="img" src={profile} alt="profile" className="image is-rounded profile-image-container" />
                    </figure>
                </div>
            </div>
         );
    }
}
 
export default Profile;