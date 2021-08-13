
import Admin2 from './Pages/Admin2/Admin2';
import Emploi from './Pages/Emploi';
import { BrowserRouter, Route} from 'react-router-dom';
import Admin3 from "./Pages/Admin3/Admin3";
import Home from './Pages/Home';
//import {Route , BrowserRouter} from 'react-router-dom'
import User from './Pages/user/User'
//import Login from './Pages/Login/Login'

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
    </BrowserRouter>
    
    
 
  );
}

export default App;
