import React from 'react'
import NavbarAd from '../component/NavbarAd'
import back from '../images/A.jpeg'
//import {Route , BrowserRouter} from 'react-router-dom'
//import Emploi from './Emploi'
const Admin = () => {
    return (
        <div style={{
            backgroundImage: 'url('+back+')',
            backgroundSize: "cover",
            height: "100vh",
           
           
            }}>
        <NavbarAd/>
        
        
        
        </div>
    )
}

export default Admin
