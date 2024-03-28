import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin , } from '@fortawesome/free-brands-svg-icons';
import profile_pic from '../assets/profile_pic.jpg'

const Header = () => {
return (
    <>
        <img src={profile_pic} alt="Business Card Image" />
        <div className="content">
            <div className="name">John Doe</div>
            <div className="job-title">Frontend Developer</div>
            <div className="website">laurasmith.website</div>
            <div className="button-container">
                <button className="button" id='email'> <FontAwesomeIcon icon={faEnvelope} /> Email</button>
                <button className="button" id='linkedin'> <FontAwesomeIcon icon={faLinkedin}/> LinkedIn</button>
            </div>
            {/* <div className="contact-info">
            Email: john.doe@example.com<br />
            Phone: +1234567890
            </div> */}
        </div>
    </>
);
}
  
export default Header;
  