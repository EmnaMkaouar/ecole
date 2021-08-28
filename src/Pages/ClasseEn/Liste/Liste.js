import React, { Fragment, useState } from 'react'
import './tableListe.css'

import data from './mockListe-data.json'

import Read from './Read'
import Edit from './Edit'
import { Container, DatePicker, Select } from 'react-materialize'
import moment from 'moment'


const Liste = () => {
  
  const [date, setDate] = useState(new Date());
  //state = { date: new Date().toLocaleDateString()};
  const [contacts, setContacts] = useState(data);

  const [editContactId, setEditContactId] = useState(null);

  const [editFormData, setEditFormData] = useState(
    {
      fullName: "",
      classe: "",
      Number: "",
      date: "",
    });

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };


  const handleEditFromSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      classe: editFormData.classe,
      Number: editFormData.Number,
      date: editFormData.date,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContacts(newContacts);
    setEditContactId(null)
  };
  const handleEditClick = (events, contact) => {
    events.preventDefault();
    setEditContactId(contact.id);
    const formValues = {
      fullName: contact.fullName,
      classe: contact.classe,
      Number: contact.Number,
      date: contact.date,
    }
    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  }


  return (
    <div>
      <div class="input-field col s12 ">
        <Select>
          <option value="8-10" selected>8-10!</option>
          <option value="10-12">10-12</option>
          <option value="14-16">14-16</option>
          <option value="16-18">16-18</option>
        </Select>

      </div>

      <Container>
        <p className="flow-text">Date: </p>
        <DatePicker
          value={moment(date).format("MM-DD-YYYY")}
        ></DatePicker>




      </Container>



      <div >

        <div class='cont1123'>

          <div className="add123">


          </div>
          <form onSubmit={handleEditFromSubmit}>
            <table className="striped z-depth-5 ">
              <thead>
                <tr>
                  <th> الحضور </th>
                  <th> اسم التلميذ </th>
                  <th> رقم التسجيل</th>


                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <Fragment>
                    {
                      (<Read
                        contact={contact}
                        handleEditClick={handleEditClick}

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

export default Liste
