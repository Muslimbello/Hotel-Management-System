import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Loginpage from './login';
import Register from './register';
import Dashbord from './dashboard';
import Landingpage from './landingpage';

function App() {
  return (
    
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landingpage/>} />
          <Route path="/Login" element={<Loginpage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashbord/*" element={<Dashbord />} />
        </Routes>
      </BrowserRouter>
     
    
    </main>
    
  );
}

export default App;
