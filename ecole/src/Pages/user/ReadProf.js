import React from "react";
import admin from '../../images/teach.png'
import './tableuser.css'
const ReadProf = ({ contact, handleEditClick }) => {
  return (
      <div >
   
      <div style={{backgroundColor:"white", border:'2px solid' ,
    borderColor:'pink', padding:"30px" , marginTop:"20px" ,
    maxWidth:'450px',height:'500px' , 
    borderRadius: "10px" ,marginLeft:"60px",}} className= "center z-depth-5 ">
    <div>
     
      
    <img src={admin} alt="" className="adminic "/>
      <div style={{padding:"20px" }} >{contact.fullName} : <b>اسم المستخدم</b> <i class="material-icons">person</i></div>
      <div style={{padding:"20px" }}>{contact.Number}  : <b>رقم بطاقة التعريف</b> <i class="material-icons">person</i></div>
      <div style={{padding:"20px" }}>{contact.email}  : <b>البريد الإلكتروني </b> <i class="material-icons">mail_outline</i></div>
      <div style={{padding:"20px" }}>{contact.MDP} : <b>كلمة العبور</b> <i class="material-icons">person</i></div>
      <div style={{padding:"20px" }}>
        <button className="btn waves-effect waves-light deep-orange"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
           تغيير
        </button>
       
      </div>
     
      </div>
      </div>
    </div>
  );
};

export default ReadProf;