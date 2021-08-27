import React from "react";

const Read = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
     <td>
        <button className="btn waves-effect waves-light  light-blue lighten-2"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <i class="material-icons" >edit </i>
        </button>
    
      </td>
      <td>{contact.date}</td>
      <td>{contact.fullName}</td>
      <td>{contact.Number}</td>
     
      
     
    </tr>
  );
};

export default Read;