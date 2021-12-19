import React, { useState } from 'react';

import './App.css';
import Head from './Components/Head/Head';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import {userContext} from './Context/userContext';



function App() {
  const [user, setUser] = useState({name:""}); // Estado de user ->{name:"alex"}

  const login = name => setUser({name}) // Rellena estado user
  const logout = () => setUser({name:""}) // Limpia estado user

  const value = {
    user,
    login,
    logout
  } // Claves: user,login,logout

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={value}>
          <Head/>
          <Main/>
        </userContext.Provider>
      </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
