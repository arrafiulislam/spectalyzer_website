import React, { useState } from 'react';
import './Therapist.css';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/Footer';


const Therapist = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div className='therapist-reg'>
            <div className="therapist-heading">
                <p>THERAPIST REGISTRATION FORM</p>
                <p className='warning-text'>"<span className='star'>*</span>" indicates required fields</p>
            </div>
            <form className='reg-form' action="">
                <p className='field-title'>Name <span className='star'>*</span></p>
                <div className='applicants-info'>
                    <div>

                        <input type="text" />
                        <p className='field-title'>First</p>
                    </div>
                    <div>

                        <input type="text" />
                        <p className='field-title'>Last</p>
                    </div>
                </div>
                <p className='field-title'>Mother's Name <span className='star'>*</span></p>
                <div className='applicants-info'>
                    <div>

                        <input type="text" />
                        <p className='field-title'>First</p>
                    </div>
                    <div>

                        <input type="text" />
                        <p className='field-title'>Last</p>
                    </div>
                </div>
                <p className='field-title'>Father's Name <span className='star'>*</span></p>
                <div className='applicants-info'>
                    <div>

                        <input type="text" />
                        <p className='field-title'>First</p>
                    </div>
                    <div>

                        <input type="text" />
                        <p className='field-title'>Last</p>
                    </div>
                </div>
                <p className='field-title'>Institute Associated with <span className='star'>*</span></p>
                <div className='institute-field'>
                    <input type="text" placeholder='Name of your Workplace' />

                </div>
                <p className='field-title'>Username</p>
                <div className='single-field'>
                    <input type="text" />

                </div>
                <p className='field-title'>Password</p>
                <div className='applicants-info'>
                    <div>

                        <input type="text" />
                        <p className='field-title'>Enter Password</p>
                    </div>
                    <div>

                        <input type="text" />
                        <p className='field-title'>Confirm Password</p>
                    </div>
                </div>
                <p className='field-title'>Gender <span className='star'>*</span></p>
                <div className='gender-sec'>

                    <input type="radio" name="gender" value="male" />
                    <label for="male">Male</label> <br />
                    <input type="radio" name="gender" value="female" />
                    <label for="female">Female</label> <br />

                </div>
                <p className='field-title'>Date of Birth <span className='star'>*</span></p>
                <div className='date'>
                    <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
                </div>
                <p className='field-title'>Specialist on <span className='star'>*</span></p>
                <div className='specialist-sec'>

                    <input type="radio" name="specialist" value="Occupational-Therapy" />
                    <label for="Occupational-Therapy">Occupational Therapy</label> <br />
                    <input type="radio" name="specialist" value="Physiotherapy" />
                    <label for="Physiotherapy">Physiotherapy</label> <br />
                    <input type="radio" name="specialist" value="Speach-and-Language-Therapy" />
                    <label for="Speach-and-Language-Therapy">Speach and Language Therapy</label> <br />

                </div>

                <p className='field-title'>Address</p>
                <div className='single-field'>
                    <input type="text" />

                </div>
                <p className='field-title'>Street Address</p>
                <div className='single-field'>
                    <input type="text" />

                </div>
                <p className='field-title'> Address Line 2</p>
                <div className='applicants-info'>
                    <div>

                        <input type="text" />
                        <p className='field-title'>City</p>
                    </div>
                    <div>

                        <input type="text" />
                        <p className='field-title'>State / Province / Region</p>
                    </div>
                </div>
                <div className='applicants-info'>
                    <div>

                        <input type="text" />
                        <p className='field-title'>ZIP / Postal Code</p>
                    </div>
                    <div>

                        <input type="text" />
                        <p className='field-title'>Country</p>
                    </div>
                </div>
                <p className='field-title'>Email <span className='star'>*</span></p>
                <div className='single-field'>
                    <input type="text" />
                </div>
                <p className='field-title'>Phone <span className='star'>*</span></p>
                <div className='single-field'>
                    <input type="text" />
                </div>
                <div className="img-container">
                    <div>
                        <p className='img-title'>Upload Profile Image</p>
                        <input type="file" onChange={handleChange} />
                        <img src={file} />
                        <p className='img-tail'>Max. file size: 8 MB.</p>
                    </div>

                </div>
                <div>
                    <button className='submit-btn'>SUBMIT</button>
                </div>

            </form>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};


export default Therapist;