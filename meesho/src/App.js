import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';

import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Register from './Component/Register';
import Login from './Component/Login';
import Profile from './Component/Profile';
import Cart from './Component/Cart';
import AddProduct from './Component/AddProduct';
import AllProduct from './Component/AllProduct';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route exact path='/'element={<Home/>}/>
      <Route exact path='/register'element={<Register/>}/>
      <Route exact path='/login'element={<Login/>}/>
      <Route exact path= '/profile'element={<Profile/>}/>
      <Route exact path='/cart'element={<Cart/>}/>
      <Route exact path= '/add-product'element={<AddProduct/>}/>
      <Route exact path='./all-product'element={<AllProduct/>}/>




      






      </Routes>
      {/* <Footer/> */}

  
    </div>
  );
}

export default App;
