import React from 'react';
import './HowWorks.css';
import dataCollectionIcon from '../../assets/animated icon/database-table.gif';
import dataAnalysisicon from '../../assets/animated icon/gears.gif';
import graphIcon from '../../assets/animated icon/line-bars.gif';
import planningIcon from '../../assets/animated icon/stethoscope.gif'
import observationLogo from '../../assets/animated icon/search-file.gif'
import dataCollectionIcon2 from '../../assets/animated icon/database-table2.gif'

const HowWorks = () => {
    return (
        <div>
            <div className="how-works-section" id='how-works'>
                <div className='work-title-section'>
                    <p className='work-title'>STEPS OF <span className='light-color'>SPECTALYZER</span></p>
                    <p className='work-title-light'>How It Works</p>
                    <hr className='hr-line' />
                </div>
                <div className="work-card-sec">
                    <div className="work-info-card">
                        <img className='work-icon' src={dataCollectionIcon2} alt="" />
                        <p className='work-card-title'>DATA COLLECTION</p>
                        <hr className='hr-line' />
                        <p className='work-card-des'>Every day we will get a set of data. Usually, the <br />Parents are the Main Data Collector.</p>
                        
                    </div>
                    <div className="work-info-card">
                        <img className='work-icon' src={dataAnalysisicon} alt="" />
                        <p className='work-card-title'>DATA ANALYSIS</p>
                        <hr className='hr-line' />
                        <p className='work-card-des'>Expert personnel will analyze the data. With the <br /> help of factor analysis, we will get a Score for Each Day</p>
                        
                    </div>
                    <div className="work-info-card">
                        <img className='work-icon' src={graphIcon} alt="" />
                        <p className='work-card-title'>GRAPHICAL PRESENTATION</p>
                        <hr className='hr-line' />
                        <p className='work-card-des'>Based on the analysis, the result will be shown by some graph.</p>
                        
                    </div>
                    <div className="work-info-card">
                        <img className='work-icon' src={planningIcon} alt="" />
                        <p className='work-card-title'>THERAPY PLANNING</p>
                        <hr className='hr-line' />
                        <p className='work-card-des'>Therapist will plan for the therapy and other <br />activities based on the analysis.</p>
                        
                    </div>
                    <div className="work-info-card">
                        <img className='work-icon' src={observationLogo} alt="" />
                        <p className='work-card-title'>OBSERVATION</p>
                        <hr className='hr-line' />
                        <p className='work-card-des'>Observe the condition of the student and collect <br /> data.</p>
                        
                    </div>
                    <div className="work-info-card">
                        <img className='work-icon' src={dataCollectionIcon2} alt="" />
                        <p className='work-card-title'>DATA COLLECTION</p>
                        <hr className='hr-line' />
                        <p className='work-card-des'>Based on the observation collect data for further analysis.</p>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HowWorks;