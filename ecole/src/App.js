
import Prof from './Pages/LesProfs(التصرف في  المدرسين )/Profs';
import Emploi from './Pages/LesEmploisDesProfs( التّصرّف في جدول الأوقات)/Emploi';
import { BrowserRouter, Route} from 'react-router-dom';
import Matiere from "./Pages/Matiere( التّصرّف في المواد)/Matiere";
import Home from './Pages/Home(إحصائيّات)/Home';
import HomeEn from './Pages/Home(إحصائيّات)/HomeEn'
import Niv1 from './Pages/Matiere( التّصرّف في المواد)/Niv1';
import Niv2 from './Pages/Matiere( التّصرّف في المواد)/Niv2';
import Niv3 from './Pages/Matiere( التّصرّف في المواد)/Niv3';
import Niv4 from './Pages/Matiere( التّصرّف في المواد)/Niv4';
import Niv5 from './Pages/Matiere( التّصرّف في المواد)/Niv5';
import Niv6 from './Pages/Matiere( التّصرّف في المواد)/Niv6';
import Classes from './Pages/LesClasses( التصرف في الأقسام )/Classes';
import AffectationProf from './Pages/AffectationProf(تعيين المدرّسين)/AffectationProf';
import Login from './Pages/Login(دخول)/Login'
import LoginProf from './Pages/Login(دخول)/LoginProf'
import ClasseEn from './Pages/ClasseEn/ClasseEn'
import Welcome from './Pages/Welcome/Welcome';
import Etudient from './Pages/Etudient(التصرف في التلاميذ )/Etudient';
import Presence from './Pages/ClasseEn/Seance/Presence';
import UserProf from './Pages/user( المعلومات الشّخصيّة )/UserProf'
import ProfEmp from './Pages/LesEmploisDesProfs( التّصرّف في جدول الأوقات)/TableauProfEmp';
import UserAd from './Pages/user( المعلومات الشّخصيّة )/UserAd';
import EmploiP from './Pages/ProfEmploi(جدول أوقاتي)/EmploiP';
function App() {
  return (
    
    <BrowserRouter>

    <Route exact path='/'>
    <Welcome/>
    </Route>
    <Route path="/LogAdmin">
    <Login/>
    </Route>
    <Route path="/LogProf">
      <LoginProf/>
    </Route>
    <Route path="/HomeAdmin">
      <Home/>
    </Route>
    <Route path="/HomeProf">
      <HomeEn/>
    </Route>
      <Route path="/TP">
        <Prof/>
      </Route>
      <Route path="/Em">
        <ProfEmp/>
      </Route>
      <Route path="/EmP">
        <Emploi/>
      </Route>
      <Route path="/M">
      <Matiere/>
      </Route>
      <Route path="/user">
      <UserAd/>
      </Route>
      <Route path="/niv1">
        <Niv1/>
      </Route>
      <Route path="/niv2">
        <Niv2/>
      </Route>
      <Route path="/niv3">
        <Niv3/>
      </Route>
      <Route path="/niv4">
        <Niv4/>
      </Route>
      <Route path="/niv5">
        <Niv5/>
      </Route>
      <Route path="/niv6">
        <Niv6/>
      </Route>
      <Route path="/TE">
        <Classes/>
      </Route>
      <Route path="/PM">
        <AffectationProf/>
      </Route>
      <Route path="/HE">
        <HomeEn/>
      </Route>
      <Route path="/Etudiant">
        <Etudient/>
      </Route>
      <Route path="/Pr">
      <ClasseEn/>
      </Route>
      <Route path="/Presence">
        <Presence/>
      </Route>
      <Route path="/userP">
        <UserProf/>
      </Route>
      <Route path="/EmProf">
        <EmploiP/>
      </Route>
      
     
    </BrowserRouter>
    
    
 
  );
}

export default App;
