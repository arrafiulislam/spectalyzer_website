import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Join from './components/join/Join';
import HowWorks from './components/howitworks/HowWorks';
import Contact from './components/contact/Contact';
import Login from './pages/login/Login';
import Student from './pages/register/Student'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Therapist from './pages/register/Therapist';


const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <HowWorks></HowWorks>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-works" element={<HowWorks />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<Student />} />
          <Route path="/therapist" element={<Therapist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
