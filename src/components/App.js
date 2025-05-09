import { useEffect, useState } from 'react';
import './App.css';
import { MainContext } from './MainContext';
import MainLayout from './MainLayout';

function App() {
  const [system, setSystem] = useState("main");
  const [loggedUser, setLoggedUser] = useState();
  useEffect(() => {
    setSystem(localStorage.getItem("system"));
    setLoggedUser(localStorage.getItem("loggedUser"));
  }, [])
  return (
    <MainContext.Provider
      value={{
        system, setSystem,
        loggedUser, setLoggedUser
      }}
    >
      <MainLayout />
    </MainContext.Provider>
  );
}

export default App;
