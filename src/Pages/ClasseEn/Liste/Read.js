import React from "react";


const Read = ({ contact, handleCancelClick }) => {
  return (
    <tr>

      <td>
        
        <form action="#">
          
            <label>
              <input name="group1" type="radio" checked />
              <span>P</span>
            </label>
         
            <label>
              <input class="abscent" name="group1" type="radio"  />
              <span>A</span>
            </label>
        </form>
      </td>

      <td>{contact.fullName}</td>
      <td>{contact.Number}</td>



    </tr>
  );
};

export default Read;