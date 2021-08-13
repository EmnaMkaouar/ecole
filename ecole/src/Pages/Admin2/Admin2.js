import React, { Fragment, useState } from 'react'
import './table.css'

import NavbarAd from '../../component/NavbarAd'
import back from '../../images/A4.jpeg'
import data from './mock-data.json'
import{nanoid} from 'nanoid'
import  Read  from '../../component/Read'
import Edit  from '../../component/Edit'



const Admin2 = () => {
  
 const [contacts, setContacts]=useState(data);
 const [addFormData, setAddFromData]=useState(
   {
     fullName:"",
     MDP:"",
     Number:"",
     email:"",


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

    const handleAddFromSubmit=(event)=>{
      event.preventDefault();
      const newContact ={
        id: nanoid(),
        fullName: addFormData.fullName,
        MDP: addFormData.MDP,
        Number: addFormData.Number,
        email: addFormData.email,
      };
      const newContacts =[ ...contacts, newContact]
      setContacts(newContacts);
    };
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
    const handleDeleteClick =(contactId)=>{
      const newContacts=[...contacts];
      const index = contacts.findIndex((contacts)=> contacts.id ===contactId);
      newContacts.splice(index,1);
      setContacts(newContacts);
    }
    const[modalIsOpen, setmodalIsOpen]=useState(false)
    return (
        <div style={{
            backgroundImage: 'url('+back+')',
            backgroundSize: "cover",
            height: "100vh",
           
           
            }}>
        <NavbarAd/>
        <div className="container section">
          <div className="cont1 z-depth-5 ">
         
                          <form className="center" onSubmit={handleAddFromSubmit}>
                         
                          <tr>
                          <td style={{width:"600px"}} className="center">
                            <button className="btn-floating waves-effect waves-light light-blue lighten-2" type="submit"> <i class="material-icons">group_add</i></button>
                            </td>
                            <td style={{width:"600px"}}>
                            <input style={{width:"200px" , direction:"rtl" , borderColor:"orangered"}} type="text" name="MDP" required="requird" placeholder="	كلمة العبور.." onChange={handleAddFormChange}/>
                          </td>
                          <td style={{width:"600px"}}>
                            <input  style={{width:"250px" , direction:"rtl", borderColor:"orangered"}}  type="email" name="email" required="requird" placeholder="	البريد الإلكتروني.."onChange={handleAddFormChange}/>
                          </td>
                          <td style={{width:"600px"}}>
                            <input   style={{width:"200px", direction:"rtl", borderColor:"orangered"}} type="text" name="fullName" required="requird" placeholder="اسم المستخدم.." onChange={handleAddFormChange}/>   
                            </td>
                          <td style={{width:"600px"}}>
                            <input  style={{width:"200px", direction:"rtl", borderColor:"orangered"}}   type="text" name="Number" required="requird" placeholder="	رقم بطاقة التعريف.." onChange={handleAddFormChange} />
                            </td>
                            
                         
                          
                          
                            <div>
                         
                          
                          </div>
                          </tr>
                           
                           
                      </form>
        

          </div>
        </div>
       
        
        <div class="container section">
        <div class='cont'>
        
        <div className="add">
        
   
     </div>  
        <form onSubmit={handleEditFromSubmit}>
        <table className="striped z-depth-5 ">
        <thead>
          <tr>
          <th>(إضافة, تحديث, فسخ)</th>
          <th> كلمة العبور</th>
          <th> البريد الإلكتروني</th>
          <th> اسم المستخدم </th>
          <th> رقم بطاقة التعريف</th>
             
               
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
               handleDeleteClick ={handleDeleteClick }
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

export default Admin2
