
import { Component } from 'react';
import NavbarAd from '../../component/Navbar/NavbarAd';
import back from '../../images/A4.jpeg'
import React from 'react';
import Cov from '../../images/Emp.jpeg'
import './Emploi.css'
import Emplois from '../../component/Un Emploi/Emplois';
class Emploi extends Component {
  
   render(){
  return (
      
    <div style={{ 
        backgroundImage: 'url('+back+')',
        backgroundSize: "cover",
        height: "100vh",
       
       
        }}>
    <NavbarAd/>
    <div className="covemp z-depth-5" style ={
            {backgroundImage:'url('+Cov+')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 65%",
            backgroundSize:"100% 340%"}
        }></div>
    <Emplois/>
    </div>
  );
}
}
export default Emploi;
