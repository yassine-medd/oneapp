import './App.css';
import Login  from './pages/components/auth/Login';
import { Fragment, useState } from 'react';
import Accuiel from './pages/components/Accueil';

function App() {
  const [etatNav, SetNav] = useState({Accuiel:true, Login : false });
  //const [Login, SetLogin] = useState(false);
  return (
    <Fragment>
      {
        etatNav.Accuiel ? <Accuiel   etat={ SetNav}/> : null
      }
      { etatNav.Login ?
         <Login etat={  SetNav} /> : null
      }
      

    </Fragment>
       
    
  );
}

export default App;
