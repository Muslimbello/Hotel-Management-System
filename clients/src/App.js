
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Loginpage from './login';
import Register from './register';
function App() {
  return (
    
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Loginpage/>} />
          <Route path="/Register" element={<Register/>} />
            
          
        </Routes>
      </BrowserRouter>
     
    
    </main>
    
  );
}

export default App;
