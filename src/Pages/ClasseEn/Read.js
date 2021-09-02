import React from "react";
import Modal from 'react-modal'
import { useState } from "react";
import { Link } from "react-router-dom";
import Liste from "./Liste/Liste";
import './Modal.css'
const Read = ({ classe }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (


    <tr>



      <td className="center">{classe.schoolYear}</td>

      <td className="center"> <a href="#" onClick={() => setModalIsOpen(true)}>{classe.name}</a> </td>
      <Modal isOpen={modalIsOpen} shouldCloseOnEsc={false}>
        <i class="material-icons right close2" onClick={() => setModalIsOpen(false)}>close</i>
        <Liste
          classId={classe.id}
        />

      </Modal>







    </tr>
  );
};

export default Read;