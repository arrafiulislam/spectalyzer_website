import React from 'react';
import './Contact.css';
import specContactLogo from '../../assets/images/spectalyzer-logo-26_bg-removeb.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen, faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    
    return (
        <div className='contact' id='contact-us'>
            <div className="contact-section">
            <div className="spec-info">
                <img className='spec-img' src={specContactLogo} alt="" />
                <p className="spec-des">This is a web based application to track down all possible activities of an autistic child and with the help of factor analysis and time series analysis, make a graphical presentation of the activities. Based on the graphical presentation of all the activities, it will make it easy to track the all activities of the children
                    and help the therapist to make their decision about the applied therapy and behavior analysis.</p>
            </div>
            <div className="contact-info-section">
                <p className='contact-title'>CONTACT INFO</p>
                <p className='num-field'><FontAwesomeIcon icon={faMobileScreen} size="lg" style={{ color: "#7b8887", }} /> <span className='contact-num'> + 880 1711 505413</span></p>
                <button className='mail-btn'><FontAwesomeIcon icon={faEnvelope} size="lg" style={{ color: "#7b8887", }} /> <span className='mail-id'>spectalyzer@gmail.com</span>
                </button>
                <p className='loc-field'><FontAwesomeIcon icon={faLocationDot} size="lg" style={{color: "#7b8887",}} /> <span className='loc-details'> 1/1-B, Subhanbag, Savar, Dhaka-1340</span></p>
            </div>
            <div className="contact-field">
                <p className='contact-title'>CONTACT US</p>
                <input className='name-field' type="text" placeholder='Name'/>
                <input className='email-field' type="text" placeholder='Email'/>
                <textarea  className='message-field' type="text" placeholder='Message' />
                <button className='submit-btn'>SUBMIT</button>
            </div>
            </div>
           
        </div>
    );
};

export default Contact;