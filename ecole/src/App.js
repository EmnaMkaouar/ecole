
import Admin2 from './Pages/Admin2/Admin2';
import Emploi from './Pages/Emploi';
import { BrowserRouter, Route} from 'react-router-dom';
import Admin3 from "./Pages/Admin3/Admin3";
import Home from './Pages/Home';
import User from './Pages/user/User'
import Niv1 from './Pages/Admin3/Niv1';
import Niv2 from './Pages/Admin3/Niv2';
import Niv3 from './Pages/Admin3/Niv3';
import Niv4 from './Pages/Admin3/Niv4';
import Niv5 from './Pages/Admin3/Niv5';
import Niv6 from './Pages/Admin3/Niv6';
import Admin4 from './Pages/Admin4/Admin4';
import Admin5 from './Pages/Prof+Matiere/Admin5';
//import Login from './Pages/Login/Login'
//import En1 from './Pages/En1/En1';
//import HomeEn from './Pages/HomeEn'
import Etudient from './Pages/Etudient/Etudient';
function App() {
  return (
    
    <BrowserRouter>
    
    <Route exact path='/'>
    <Home/>
    </Route>
      <Route path="/TP">
        <Admin2/>
      </Route>
      <Route path="/Em">
        <Emploi/>
      </Route>
      <Route path="/M">
      <Admin3/>
      </Route>
      <Route path="/user">
      <User/>
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
        <Admin4/>
      </Route>
      <Route path="/PM">
        <Admin5/>
      </Route>
      
     
    </BrowserRouter>
    
    
 
  );
}

export default App;
