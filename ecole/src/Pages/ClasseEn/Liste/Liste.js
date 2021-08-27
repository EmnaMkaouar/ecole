import React, { Fragment, useState } from 'react'
import './tableListe.css'

import data from './mockListe-data.json'

import  Read  from './Read'
import Edit  from './Edit'



const Liste = () => {
  
 const [contacts, setContacts]=useState(data);
 
   const [editContactId,setEditContactId]=useState(null);
  
    const [editFormData, setEditFormData] = useState(
      {
        fullName:"",
        classe:"",
        Number:"",
        date:"",
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
        classe: editFormData.classe,
        Number: editFormData.Number,
        date : editFormData.date,
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
        classe: contact.classe,
        Number: contact.Number,
        date: contact.date,
      }
      setEditFormData(formValues);
    };
    const handleCancelClick=()=>{
      setEditContactId(null);
    }
    
    
    return (
        <div>
            
      
        
       
        
        <div >
        <div class='cont1123'>
        
        <div className="add123">
        
   
     </div>  
        <form onSubmit={handleEditFromSubmit}>
        <table className="striped z-depth-5 ">
        <thead>
          <tr>
          <th>تحديث</th>
          <th> الحضور </th>
          <th> اسم التلميذ </th>
          <th> رقم التسجيل</th>
             
               
          </tr>
          </thead>
          <tbody>
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
          </tbody>
 
      </table>
      </form>
      
     
   
  
          </div>
          </div>
        </div>
    )
}

export default Liste
