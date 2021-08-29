import React from "react";

const Read = ({ student, handleCancelClick }) => {
  return (
    <tr>

      <td>
        
        <form action="#">
          
            <label>
              <input name="group1" type="radio" checked={student.checked == undefined?true:false} />
              <span>P</span>
            </label>
         
            <label>
              <input name="group1" type="radio" checked={student.checked == undefined?false:true} />
              <span>A</span>
            </label>
        </form>
      </td>

      <td>{student.firstName} {student.lastName}</td>
      <td>{student.id}</td>

    </tr>
  );
};

export default Read;