import React from "react";
import Modal from 'react-modal'
import { useState } from "react";
import {Link} from "react-router-dom";
import Liste from "./Liste/Liste";
import './Modal.css'
const Read = ({ contact}) => {
  const [modalIsOpen , setModalIsOpen]= useState(false)
  return (
    
   
     <tr>
    
      
      
      <td className="center">{contact.schoolYear}</td>

      <td className="center"> <Link onClick={()=> setModalIsOpen(true)}>{contact.name}</Link> </td>
      <Modal isOpen={modalIsOpen} shouldCloseOnEsc={false}>
      <i class="material-icons right close2" onClick={()=>setModalIsOpen(false)}>close</i>
       <Liste/>
      
      </Modal>
    
      
      
      
     
      
     
    </tr>
  );
};

export default Read;