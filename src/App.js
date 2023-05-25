import React from "react";
import TuitionCenter from "./component/TuitionCentre";
import FacultyDetails from "./component/FacultyDetails";
import Footer from "./Footer";
import Features from "./Features";
import AboutUs from "./component/AboutUs";


function App() {
  return (
    <div>
     
      <TuitionCenter></TuitionCenter>
      <Features></Features>
      <FacultyDetails></FacultyDetails>
     <AboutUs></AboutUs>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
