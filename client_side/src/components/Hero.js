import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Hero.css'

const Hero = () => {

     useEffect(()=>{
       AOS.init({duration: "2000"})
     },[]);
    return (
        <div className='hero' >
            <div className='content'>
                <p className='hero-title' data-aos="fade-down">Spectalyzer, <span className='text-yellow'>Spectrum </span>Analyzer</p>
                <p className='hero-des' data-aos="fade-up">Based on the graphical representation of all activities, <br /> it will make it easy to track all the activities of the children.</p>
                <div>
                    <button className='join-btn' data-aos="fade-down">JOIN NOW  <FontAwesomeIcon className='heart-icon' icon={faHeart} /></button>
                </div>
            </div>
        </div>
    )
}

export default Hero
