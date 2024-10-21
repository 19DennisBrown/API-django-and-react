

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import Create from './components/create';

const App = () => {

  return ( 
    <BrowserRouter>
      <Home/>
      <Routes>
        <Route path='/' element={<Create/>}/>
      </Routes>

    </BrowserRouter>

   );
}
 
export default App;