import React from "react";

const Edit = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
<div style={{backgroundColor:"white", border:'5px solid' ,
    borderColor:'pink',  
    maxWidth:'450px',height:'500px' , 
    borderRadius: "10px" ,marginRight:"auto",marginLeft:"60px", marginTop:"20px" ,}} className= "center z-depth-5 ">
    

    <div>
      <div style={{width:"420px",paddingTop:"50px" }}>
        <input  style={{ direction:"rtl", borderColor:"orangered"}} 
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </div>
      <div style={{width:"420px",paddingTop:"50px"}}>
        <input  style={{ direction:"rtl", borderColor:"orangered"}} 
          type="text"
          required="required"
          placeholder="Enter a  number..."
          name="Number"
          value={editFormData.Number}
          onChange={handleEditFormChange}
        ></input>
      </div>
      <div style={{width:"420px",paddingTop:"50px"}}>
        <input  style={{ direction:"rtl", borderColor:"orangered"}} 
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </div>
      <div style={{width:"420px",paddingTop:"50px"}}> 
        <input  style={{ direction:"rtl", borderColor:"orangered"}} 
          type="text"
          required="required"
          placeholder="Enter an MDP..."
          name="MDP"
          value={editFormData.MDP}
          onChange={handleEditFormChange}
        ></input>
      </div>
      <div style={{width:"400px",paddingTop:"20px"}}> 
        <button className="btn-floating waves-effect waves-light  light-blue lighten-2" type="submit">  <i class="material-icons">check</i></button>
        <button className="btn-floating waves-effect waves-light  deep-orange" type="button" onClick={handleCancelClick}>
        <i class="material-icons">cancel</i>
        </button>
      </div>
    </div>

    </div>
  );
};

export default Edit;