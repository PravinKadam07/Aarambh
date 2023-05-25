import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features">
      <h2>Our Features</h2>
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-chalkboard-teacher"></i>
        </div>
        <div className="feature-content">
          <h3>Experienced Faculty</h3>
          <p>
            Our tuition center boasts a team of experienced and highly qualified faculty members who are experts in their respective subjects. They provide in-depth knowledge and guidance to help students excel in their studies.
          </p>
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-book"></i>
        </div>
        <div className="feature-content">
          <h3>Comprehensive Curriculum</h3>
          <p>
            We offer a comprehensive curriculum that covers all the necessary subjects and topics required for IIT-JEE and CET exams. Our well-structured course materials and teaching methods ensure a strong foundation for students.
          </p>
         
          <p><ul>
  <li> <i> <b>Some of the Key features are following:</b> </i></li>  
            <li>Student Wise Performance Sheet</li>
          <li>Daily Chapter Wise Tests</li>
          <li>Combined And Full Length Tests</li>
          <li>Regular Doubt Clearing Session</li>
          <li>Standred Study Material Available</li>
            </ul></p>
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-icon">
          <i className="fas fa-user-tie"></i>
        </div>
        <div className="feature-content">
          <h3>Individual Attention</h3>
          <p>
            We believe in providing personalized attention to each student. Our small class sizes and dedicated faculty ensure that students receive individualized guidance, mentoring, and support to address their unique needs and challenges.
          </p>
        </div>
      </div>
      {/* Add more feature items here */}
    </div>
  );
};

export default Features;
