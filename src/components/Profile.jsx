import React from 'react';
import './css/Profile.css';
import erikaImage from '../img/erikaSmaller.jpg';

const Profile = (props) => {
    return (
        <div>
            <h1 className="text">Hi, Erika Miguel!</h1>
            <p className="text">
                I am a queer first-generation Filipino American, and I go by they/them pronouns. 
                I'm software engineer with over 5 years experience, currently working at Bocoup.
            </p>
        </div>
    );
}

export default Profile;