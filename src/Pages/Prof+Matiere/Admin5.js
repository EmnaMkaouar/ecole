import React, { Fragment, useState } from 'react'
import './table2.css'
import Cov from '../../images/prof.jpeg'
import NavbarAd from '../../component/NavbarAd'
import back from '../../images/A4.jpeg'
import data from './mock3-data.json'
import{nanoid} from 'nanoid'
import  Read  from './Read'
import Edit  from './Edit'


const Admin5 = () => {
const [contacts, setContacts]=useState(data);
const [addFormData, setAddFromData]=useState(
  {
    idProf:"",
    idClasse:"",
    idMat:"",
    annee:"",


  });
  const [editContactId,setEditContactId]=useState(null);
  const handleAddFormChange=(event)=>{
    event.preventDefault();
    const fieldName= event.target.getAttribute('name');
    const fieldValue=event.target.value;
    const newFormData={...addFormData};
    newFormData[fieldName]= fieldValue;
    setAddFromData(newFormData);
  
   };
   const [editFormData, setEditFormData] = useState(
     {
       idProf:"",
       idClasse:"",
       idMat:"",
       annee:"",
     });

     const handleEditFormChange=(event)=>{
       event.preventDefault();
       const fieldName= event.target.getAttribute("name");
       const fieldValue=event.target.value;
        const newFormData={...editFormData};
        newFormData[fieldName]=fieldValue;
        setEditFormData(newFormData);
     } ;

   const handleAddFromSubmit=(event)=>{
     event.preventDefault();
     const newContact ={
       id: nanoid(),
       idProf: addFormData.idProf,
       idClasse: addFormData.idClasse,
       idMat: addFormData.idMat,
       annee: addFormData.annee,
     };
     const newContacts =[ ...contacts, newContact]
     setContacts(newContacts);
   };
   const handleEditFromSubmit= (event)=>{
     event.preventDefault();
     const editedContact ={
       id : editContactId,
       idProf: editFormData.idProf,
       idClasse: editFormData.idClasse,
       idMat: editFormData.idMat,
       annee : editFormData.annee,
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
       idProf: contact.idProf,
       idClasse: contact.idClasse,
       idMat: contact.idMat,
       annee: contact.annee,
     }
     setEditFormData(formValues);
   };
   const handleCancelClick=()=>{
     setEditContactId(null);
   }
   const handleDeleteClick =(contactId)=>{
     const newContacts=[...contacts];
     const index = contacts.findIndex((contacts)=> contacts.id ===contactId);
     newContacts.splice(index,1);
     setContacts(newContacts);
   }
   
   return (
       <div style={{
           backgroundImage: 'url('+back+')',
           backgroundSize: "cover",
           height: "100vh",
          
          
           }}>
       <NavbarAd/>
       <div className="cov15 z-depth-5" style ={
            {backgroundImage:'url('+Cov+')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 50%",
            backgroundSize:"100% 340%"}
        }>
        </div>
       <div className="container section">
         <div className="cont15 z-depth-5 ">
        
                         <form className="center" onSubmit={handleAddFromSubmit}>
                        
                         <tr>
                         <td style={{width:"600px"}} className="center">
                           <button className="btn-floating waves-effect waves-light light-blue lighten-2" type="submit"> <i class="material-icons">group_add</i></button>
                           </td>
                           
                           
                         <td style={{width:"600px"}}>
                           <input  style={{width:"250px" , direction:"rtl", borderColor:"orangered"}}  type="text" name="annee" required="requird" placeholder="	السنة الدراسية.."onChange={handleAddFormChange}/>
                         </td>
                         <td style={{width:"600px"}}>
                           <input  style={{width:"200px", direction:"rtl", borderColor:"orangered"}}   type="text" name="idMat" required="requird" placeholder="	المادة.." onChange={handleAddFormChange} />
                           </td>
                           <td style={{width:"600px"}}>
                           <input style={{width:"200px" , direction:"rtl" , borderColor:"orangered"}} type="text" name="idClasse" required="requird" placeholder=" القسم .." onChange={handleAddFormChange}/>
                         </td>
                         <td style={{width:"600px"}}>
                           <input   style={{width:"200px", direction:"rtl", borderColor:"orangered"}} type="text" name="idProf" required="requird" placeholder="إسم المدرس.." onChange={handleAddFormChange}/>   
                           </td>
                         
                           
                        
                         
                         
                           <div>
                        
                         
                         </div>
                         </tr>
                          
                          
                     </form>
       

         </div>
       </div>
      
       
       <div class="container section">
       <div class='cont5 z-depth-5'>
       
       <div className="add5">
       
  
    </div>  
       <form onSubmit={handleEditFromSubmit} >
       
       <thead>
         <tr>
         
              
         </tr>
         </thead>
         
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
              handleDeleteClick ={handleDeleteClick }
              />
          )}

           
         
         </Fragment>

         ))}
         

     
     </form>
     
    
  
 
         </div>
         </div>
       </div>
   )
}

export default Admin5