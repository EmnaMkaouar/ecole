import React from 'react'
import NavbarEn from '../../component/Navbar/NavbarEn'
import Emplois from '../../component/ProfEmploi/Emploi'
import back from "../../images/A4.jpeg"
import Cov from '../../images/Emp.jpeg'

function Emploi() {
    return (
        <div style={{
            backgroundImage: 'url('+back+')',
            backgroundSize: "cover",
            height: "100vh",
           
           
            }}>
         <NavbarEn/>
         <div className="covemp z-depth-5" style ={
            {backgroundImage:'url('+Cov+')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 65%",
            backgroundSize:"100% 340%"}
        }></div>
         <Emplois/>
        </div>
    )
}

export default Emploi
