import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './pages/Shop';
import Shopcateg from './pages/Shopcateg';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/mensbanner.jpeg'
import women_banner from './Components/Assests/women-1.avif'
import kids_banner from './Components/Assests/kid1.avif'



function App() {
    return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<Shopcateg banner={men_banner} category="men"/>}/>
      <Route path='/women' element={<Shopcateg banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<Shopcateg banner={kids_banner} category="kids"/>}/>
      <Route path='product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='cart' element={<Cart/>}/>
      <Route path='login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
        
 
    </>
  )}

export default App;
