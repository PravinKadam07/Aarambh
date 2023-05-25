import React from 'react';
import './fac.css';
import sam from "./images/sam.jpg"
import rahul from "./images/rahul.jpg"
import sharad from "./images/sharad.jpg"

const FacultyDetails = () => {

  return (
    <div className="faculty-details">
      <h2>Our Faculty</h2>
      <div className="faculty-list">
      
          <div className="faculty-card" >
            <img src={sam} alt="sam" />
            <h3>Samadhan Shinde</h3>
            <p>Specialization: Physics</p>
            <p>Experience: 4 years</p>
            <p>B.E MECHANICAL</p>
           
          </div>
          <div className="faculty-card" >
            <img src={rahul} alt="rahul" />
            <h3>Rahul Kadam</h3>
            <p>Specialization: Mathematics</p>
            <p>Experience: 4 years</p>
            <p>M.Tech, VJTI Mumbai</p>
           
          </div>
          <div className="faculty-card" >
            <img src={sharad} alt="sharad" />
            <h3>Sharad Kadam</h3>
            <p>Specialization: Chemistry </p>
            <p>Experience: 4 years</p>
            <p>B.E MECHANICAL</p>
           
          </div>
      
      </div>
    </div>
  );
};

export default FacultyDetails;
