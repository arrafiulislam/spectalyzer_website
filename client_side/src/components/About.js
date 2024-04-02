import React, { useEffect } from 'react'
import kidPicture from '../assets/images/cute-boy-plays-wooden-game-tangram-creative-educational-games-quarantine-copy-space_251358-239.jpg'
import plannedLogo from '../assets/icon/planned.png'
import visonLogo from '../assets/icon/vision.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

import missionLogo from '../assets/icon/mission-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'
import './About.css'

const About = () => {
    useEffect(()=>{
        AOS.init({duration: "2000"})
      },[]);
    return (
        <div className='about' id='about'>
            <div className='container'>

                <div className='about-des-section'>
                    <p className='about-des'>Autistic <span className='sky-text'>Spectrum</span> Analyzer</p>
                    <p className='about-des-light'>Graphical Presentation Makes It Easy</p>

                    <div className='planned-section' data-aos="fade-right">
                        <img className='plan-logo' src={plannedLogo} alt="" />
                        <div >
                            <p className='planned-des'  >A PLANNED WAY OF THERAPY</p>
                            <p className='planned-light'>Based on the graphical presentation of all the activities, it will make it easy to track the all activities of the children and help the therapist to make their decision 
                                about the applied therapy and behavior analysis</p>
                        </div>

                    </div>
                    <div className='planned-section' data-aos="fade-right">
                        <img className='plan-logo' src={visonLogo} alt="" />
                        <div >
                            <p className='planned-des'>VISION</p>
                            <p className='planned-light'>Our vision is to empower parents, therapists, and caregivers with a powerful tool that enhances the 
                            understanding and management of autistic children’s activities</p>
                        </div>

                    </div>
                    <div className='planned-section' data-aos="fade-right">
                    <FontAwesomeIcon icon={faAnchor} size="2xl" style={{color: "#08ada7",}} />
                        <div className='mission-des'>
                            <p className='planned-des'>MISSION</p>
                            <p className='planned-light'>Our mission is to provide a comprehensive web-based application that effectively tracks and analyzes the activities of autistic children</p>
                        </div>

                    </div>
                </div>
                <img className='about-img' src={kidPicture} alt='' />

            </div>

        </div>
    )
}

export default About
