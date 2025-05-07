import { useEffect, useState } from 'react';
import './App.css';
import { MainContext } from './MainContext';
import MainLayout from './MainLayout';

function App() {
  const [system, setSystem] = useState("main");
  useEffect(() => {
    setSystem(localStorage.getItem("system"));
  }, [])
  return (
    <MainContext.Provider
      value={{
        system, setSystem
      }}
    >
      <MainLayout />
    </MainContext.Provider>
  );
}

export default App;
