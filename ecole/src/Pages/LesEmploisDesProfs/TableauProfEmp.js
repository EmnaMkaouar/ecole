import React, { Fragment, useState } from 'react'
import './tableProf.css'
import Cov from '../../images/teams.jpeg'
import NavbarAd from '../../component/Navbar/NavbarAd'
import back from '../../images/A4.jpeg'
import data from './mockEm-data.json'

import  Read  from './Read'



const ProfEmp = () => {
const [contacts]=useState(data);

  
   
    
   
   
   
   
   return (
       <div style={{
           backgroundImage: 'url('+back+')',
           backgroundSize: "cover",
           height: "100vh",
          
          
           }}>
       <NavbarAd/>
       <div className="covProf z-depth-5" style ={
            {backgroundImage:'url('+Cov+')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 65%",
            backgroundSize:"100% 340%"}
        }>
        </div>
       
      
       
       <div class="container section">
       <div class='contProf'>
       
       <div className="addProf">
       
  
       </div>  
        <form >
        <table className="striped z-depth-5 " >
        <thead>
          <tr className="center">
        
           <th className="center"> 	السنة الدراسية</th>      
           <th className="center"> 	إسم المدرس</th>        
          
             
               
          </tr>
          </thead>
         <tbody>
         {contacts.map((contact)=>(
          <Fragment>
          {  
          ( <Read 
              contact={contact} 
              
              />
          )}

           
         
         </Fragment>

         ))}
         </tbody>

         </table>
      </form>
      
     
   
  
          </div>
          </div>
        </div>
   )
}

export default ProfEmp
