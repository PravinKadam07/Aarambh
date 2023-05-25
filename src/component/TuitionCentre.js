
import './TuitionCenter.css';
import Logo from './Logo';


const TuitionCenter = () => {

  return (
    <div className="tuition-center">
      <nav className="navbar">
        <div className="logo">
        Aarambh <span>Education Center</span>
        </div>
        
      </nav> 
      <Logo ></Logo>
      <h1>Welcome to Aarambh Education Center</h1>
      <p>Enroll in our quality tutoring programs to achieve academic success!</p>
      <p><h3 className='colortitle'>IIT-JEE | NEET | MHT-CET | FOUNDATION</h3></p>
      <div className="course-list">
        {/* Course cards */}
      </div>
     
    </div>
  );
};

export default TuitionCenter;
