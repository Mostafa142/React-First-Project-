import React, { Component } from 'react';
import image8 from './../assets/images/8.jpg';
import './styling.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
class About extends Component {
    render() {
        return (
            <div id="about" className="x container-fluid">
                <h1>About</h1>
                <img className="abimg" src={image8} alt="" />
                <div>
                    <h2>Mostafa Fathi El-Sebaey</h2>
                    <p>Web Developer</p>
                    <a className="ic1" href="https://www.facebook.com/mostafa.fathi.92167">
                        <FontAwesomeIcon icon={faFacebookF} size="2x"></FontAwesomeIcon>
                    </a>
                    <a className="ic2" href="https://www.facebook.com/mostafa.fathi.92167">
                        <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
                    </a>
                    <a className="ic3" href="https://www.facebook.com/mostafa.fathi.92167">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x"></FontAwesomeIcon>
                    </a>
                    <a className="ic4" href="https://www.facebook.com/mostafa.fathi.92167">
                        <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
                    </a>
                </div>
            </div>
        );
    }
}

export default About;