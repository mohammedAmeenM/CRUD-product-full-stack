import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Navbarr from './components/Navbarr';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './Pages/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div>
  <Routes >
    <Route path='/' element={<Home />} />
    <Route path='/add' element={<AddProduct />} />
    <Route path='/edit/:id' element={<EditProduct />} />
  </Routes>
    </div>
  );
}

export default App;
