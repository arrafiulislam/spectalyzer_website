import React from 'react';
import './Login.css'
import Contact from '../../components/contact/Contact';
import Footer from '../../components/Footer';
const Login = () => {
    return (
        <div className='login'>
            <form action="">
            <div className="login-sec">
                <p className='login-title'>Username or E-mail</p>
                <input className='name-field' type="text" />
                <p className='login-title'>Password</p>
                <input className='pass-field' type="password" />
                
            </div>
            <div className='keep-sec'>
            <input className='checkbox' type="checkbox"></input> <p className='check-des'>Keep me signed in</p>
            </div>
            <div className="btn-section">
                <button className='login-btn'>Login</button>
                <button className='register-btn'>Register</button>
            </div>
            </form>
          
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Login;