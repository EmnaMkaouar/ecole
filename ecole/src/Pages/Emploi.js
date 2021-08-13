
import { Component } from 'react';
import NavbarAd from '../component/NavbarAd';
import { Inject ,ScheduleComponent, Day , Week , WorkWeek, Month , Agenda} from '@syncfusion/ej2-react-schedule'
import back from '../images/A.jpeg'
import React from 'react';
class Emploi extends Component {
  
   render(){
  return (
      
    <div style={{
        backgroundImage: 'url('+back+')',
        backgroundSize: "cover",
        height: "100vh",
       
       
        }}>
    <NavbarAd/>
    <div className="container section">
     <ScheduleComponent currentView="Month">
       <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
     </ScheduleComponent>
    </div>
    </div>
  );
}
}
export default Emploi;
