import { useState } from 'react';
import './App.css';
import { AppContext } from './context/context';
import AppRouters from './routers/appRouters';


function App() {
  const [user,setUser] = useState({name:'yarin',age:25});

  return (
    <div >
      <AppContext.Provider value={{
        setUser,user
      }}>
      <AppRouters />
      </AppContext.Provider>
    </div>
  );
}

export default App;
