import { CustomDialog, useDialog } from 'react-st-modal';
import React, {  useState } from 'react'
import{nanoid} from 'nanoid' 
import data from '../Pages/mock-data.json'
const CustomDialogContent = () => {
   


    const [contacts, setContacts]=useState(data);
    const [addFormData, setAddFromData]=useState(
        {
          fullName:"",
          MDP:"",
          Number:"",
          email:"",
     
     
        });
        const handleAddFormChange=(event)=>{
            event.preventDefault();
            const fieldName= event.target.getAttribute('name');
            const fieldValue=event.target.value;
            const newFormData={...addFormData};
            newFormData[fieldName]= fieldValue;
            setAddFromData(newFormData);
          
           };
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
    return (
      <div>
        
        <h2 className="center"> Modal title</h2>
   <form className="center" onSubmit={handleAddFromSubmit}>
   <div className="input-field"> 
   <div>
     <input type="text" name="Number" required="requird" placeholder="	رقم بطاقة التعريف.." onChange={handleAddFormChange} />
     <input type="text" name="fullName" required="requird" placeholder="اسم المستخدم.." onChange={handleAddFormChange}/>   
   </div>
     <input type="email" name="email" required="requird" placeholder="	البريد الإلكتروني.."onChange={handleAddFormChange}/>
     <input  type="text" name="MDP" required="requird" placeholder="	كلمة العبور.." onChange={handleAddFormChange}/>
     <br/>
     <br/>
     <button className="btn waves-effect waves-light light-blue lighten-2" type="submit">add</button>
     <br/>
     <br/>
     </div>
     </form>
        
        
      </div>
    );
        }
export default CustomDialogContent

