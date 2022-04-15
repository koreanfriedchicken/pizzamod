import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Pizza from './pages/Pizza';
import Salads from './pages/Salads';
import Beverages from './pages/Beverages';
import Desserts from './pages/Desserts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/pizza" element={<Pizza/>}/>
        <Route path="/salads" element={<Salads/>}/>
        <Route path="/beverages" element={<Beverages/>}/>
        <Route path="/desserts" element={<Desserts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
