import React, { Fragment, useState } from 'react'
import './tableuser.css'
import Cov from '../../images/amal.jpeg'
import Cov2 from '../../images/Info.jpeg'
import NavbarEn from '../../component/Navbar/NavbarEn'
import back from '../../images/A4.jpeg'
import data from './mock-data.json'

import  Read  from './ReadProf'
import Edit  from './EditProf'



const UserProf = () => {
  
 const [contacts, setContacts]=useState(data);
 
   const [editContactId,setEditContactId]=useState(null);
 
    const [editFormData, setEditFormData] = useState(
      {
        fullName:"",
        MDP:"",
        Number:"",
        email:"",
      });

      const handleEditFormChange=(event)=>{
        event.preventDefault();
        const fieldName= event.target.getAttribute("name");
        const fieldValue=event.target.value;
         const newFormData={...editFormData};
         newFormData[fieldName]=fieldValue;
         setEditFormData(newFormData);
      } ;

   
    const handleEditFromSubmit= (event)=>{
      event.preventDefault();
      const editedContact ={
        id : editContactId,
        fullName: editFormData.fullName,
        MDP: editFormData.MDP,
        Number: editFormData.Number,
        email : editFormData.email,
      };
      const newContacts=[...contacts];
      const index= contacts.findIndex((contact)=>contact.id === editContactId);
      newContacts[index]= editedContact;
      setContacts(newContacts);
      setEditContactId(null) 
    };
    const handleEditClick=(events, contact)=>{
      events.preventDefault();
      setEditContactId(contact.id);
      const formValues={
        fullName: contact.fullName,
        MDP: contact.MDP,
        Number: contact.Number,
        email: contact.email,
      }
      setEditFormData(formValues);
    };
    const handleCancelClick=()=>{
      setEditContactId(null);
    }
  
    
    return (
        <div style={{
            backgroundImage: 'url('+back+')',
            backgroundSize: "cover",
            height: "100vh",
           
           
            }}>
        <NavbarEn/>
        <div className="covuser z-depth-5" style ={
            {backgroundImage:'url('+Cov+')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 63%",
            backgroundSize:"100% 330%"}
        }>
        </div>
        
       
        
        <div class="container section">
        <div class='contuser'>
        
        
        <form onSubmit={handleEditFromSubmit}  >
       
          <div >
          {contacts.map((contact)=>(
           <Fragment>
           { editContactId=== contact.id ?(
             <Edit editFormData={editFormData} 
             handleEditFormChange={handleEditFormChange}
             handleCancelClick={handleCancelClick}

             />) : 
           ( <Read 
               contact={contact} 
               handleEditClick={handleEditClick}
              
               />
           )}

            
          
          </Fragment>

          ))}
          </div>
          <div style={{backgroundImage:'url('+Cov2+')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 50%",
            backgroundSize:"100% 120%", border:'5px solid' ,
    borderColor:'pink', padding:"30px" , marginTop:"20px" ,height:'500px' , 
    borderRadius: "10px" ,marginLeft:"550px", marginTop:"-500px", width:'400px'}} className= "center z-depth-5 ">
    

      </div>
      
      </form>
      
     
   
  
          </div>
          </div>
        </div>
    )
}

export default UserProf