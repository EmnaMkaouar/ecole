import React from "react";
import {Link} from "react-router-dom";
const Read = ({ contact }) => {
  return (
    
   
     <tr>
    
      
      
      <td className="center">{contact.schoolYear}</td>
      <td className="center"><Link to='/Presence'>  {contact.name}</Link></td>
    
      
      
      
     
      
     
    </tr>
  );
};

export default Read;