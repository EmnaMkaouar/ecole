import React, { Fragment, useState, useEffect } from 'react'
import './tableListe.css'
import { StudentAPI } from '../../../api/student.api'
import { AbsenceAPI } from '../../../api/absence.api'
import Read from './Read'
import { Container, DatePicker, Select } from 'react-materialize'
import moment from 'moment'


const Liste = ({ classId }) => {

  const [date, setDate] = useState(new Date());
  //state = { date: new Date().toLocaleDateString()};
  const [students, setStudents] = useState([]);

  //get all absences by class and date and hours
  useEffect(() => {
    const fetchAllByDateAndHourAndClasse = async () => {
      const absenceList = await AbsenceAPI.getAbsenceByDateAndHourAndClasse("2021-08-08", "10:00", "11:00", classId);



      //get All student By classe
      
        const fetchAll = async () => {
          const allStudentByClass = await StudentAPI.getAllByClasse(classId);
          for(let student of allStudentByClass){
            for(let absentStudent of absenceList){
              if(student.id === absentStudent.studentId){
                student["checked"] = false;
                break;
              }
            
            }
          }
          setStudents(allStudentByClass);
        }
        fetchAll();

    }
    fetchAllByDateAndHourAndClasse();
  }, [])




  const [editFormData, setEditFormData] = useState(
    {
      fullName: "",
      classe: "",
      Number: "",
      date: "",
    });


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
          <form>
            <table className="striped z-depth-5 ">
              <thead>
                <tr>
                  <th> الحضور </th>
                  <th> اسم التلميذ </th>
                  <th> رقم التسجيل</th>


                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <Fragment>
                    {
                      (<Read
                        student={student}

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
