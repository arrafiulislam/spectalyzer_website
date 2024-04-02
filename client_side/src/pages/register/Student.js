import React, { useState } from "react";
import "./Student.css";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/Footer";
import axios from "axios";

const Student = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    mothers_first_name: "",
    mothers_last_name: "",
    fathers_first_name: "",
    fathers_last_name: "",
    username: "",
    password: "",
    confirm_password: "",
    gender: "",
    dob: "",
    age: "",
    therapist_name: "",
    address: "",
    street_address: "",
    address_line_2: "",
    state: "",
    country: "",
    zip: "",
    email: "",
    number: "",
    image: "",
    prescription: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/sectalyzer", values)
      .then((res) => console.log("Registered Successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="student-reg">
      <div className="student-register-heading">
        <p>STUDENT REGISTRATION FORM</p>
        <p className="warning-text">
          "<span className="star">*</span>" indicates required fields
        </p>
      </div>
      <form className="reg-form" onSubmit={handleSubmit}>
        <p className="field-title">
          Name of the Student <span className="star">*</span>
        </p>
        <div className="applicants-info">
          <div>
            <input type="text" name="first_name" onChange={handleChange} />
            <p className="field-title">First Name</p>
          </div>
          <div>
            <input type="text" name="last_name" onChange={handleChange} />
            <p className="field-title">Last Name</p>
          </div>
        </div>
        <p className="field-title">
          Mother's Name <span className="star">*</span>
        </p>
        <div className="applicants-info">
          <div>
            <input
              type="text"
              name="mothers_first_name"
              onChange={handleChange}
            />
            <p className="field-title">First</p>
          </div>
          <div>
            <input
              type="text"
              name="mothers_last_name"
              onChange={handleChange}
            />
            <p className="field-title">Last</p>
          </div>
        </div>
        <p className="field-title">
          Father's Name <span className="star">*</span>
        </p>
        <div className="applicants-info">
          <div>
            <input
              type="text"
              name="fathers_first_name"
              onChange={handleChange}
            />
            <p className="field-title">First</p>
          </div>
          <div>
            <input
              type="text"
              name="fathers_last_name"
              onChange={handleChange}
            />
            <p className="field-title">Last</p>
          </div>
        </div>

        <div className="single-field">
          <p className="field-title">Username</p>
          <input type="text" name="username" onChange={handleChange} />
        </div>

        <div className="applicants-info">
          <div>
            <p className="field-title">Password</p>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <div>
            <p className="field-title">Confirm Password</p>
            <input
              type="password"
              name="confirm_password"
              onChange={handleChange}
            />
          </div>
        </div>
        <p className="field-title">
          Gender <span className="star">*</span>
        </p>
        <div className="gender-sec">
          <input type="radio" name="gender" onChange={handleChange} />
          <label for="male">Male</label> <br />
          <input type="radio" name="gender" onChange={handleChange} />
          <label for="female">Female</label> <br />
        </div>

        <div className="date">
          <p className="field-title">
            Date of Birth <span className="star">*</span>
          </p>
          <input
            type="date"
            id="start"
            name="dob"
            onChange={handleChange}
            min="1970-01-01"
            max="2050-12-31"
          />
        </div>

        <div className="single-field">
          <p className="field-title">Age</p>
          <input type="number" name="age" onChange={handleChange} />
          <p className="age-text">
            This will be a calculated field based on the date of birth.
          </p>
        </div>

        <div className="single-field">
          <p className="field-title">Supervisor or Therapist</p>
          <input type="text" name="therapist_name" onChange={handleChange} />
          <p className="age-text">
            Name of the associated supervisor or therapist of the student
          </p>
        </div>

        <div className="single-field">
          <p className="field-title">Address</p>
          <input type="text" name="address" onChange={handleChange} />
        </div>

        <div className="single-field">
          <p className="field-title">Street Address</p>
          <input type="text" name="street_address" onChange={handleChange} />
        </div>

        <div className="applicants-info">
          <div>
            <p className="field-title"> Address Line 2</p>
            <input type="text" name="address_line_2" onChange={handleChange} />
          </div>
        </div>
        <div className="applicants-info">
          <div>
            <p className="field-title">State / Province / Region</p>
            <input type="text" name="state" onChange={handleChange} />
          </div>
          <div>
            <p className="field-title">Country</p>
            <input type="text" name="country" onChange={handleChange} />
          </div>
        </div>
        <div className="applicants-info">
          <div>
            <p className="field-title">ZIP</p>
            <input type="text" name="zip" onChange={handleChange} />
          </div>
        </div>
        <p className="field-title">Email</p>
        <div className="single-field">
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <p className="field-title">
          Phone <span className="star">*</span>
        </p>
        <div className="single-field">
          <input type="text" name="number" onChange={handleChange} />
        </div>
        <div className="img-container">
          <div>
            <p className="img-title">Upload Profile Image</p>
            <input type="file" name="image" />
            <img src={file} />
            <p className="img-tail">
              Accepted file types: jpg, jpeg, png, gif.
            </p>
          </div>
          <div>
            <p className="img-title">Prescription upload</p>
            <input type="file" name="prescription" />
            <img src={file} />
            <p className="img-tail">Max. file size: 8 MB.</p>
          </div>
        </div>
        <div>
          <input type="submit" className="submit-btn" />
        </div>
      </form>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Student;
