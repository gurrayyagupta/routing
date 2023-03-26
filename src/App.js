import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Nav from './components/Nav';
import Products from './components/products/Products';
import ProductDesign from './components/products/ProductDesign';
import Notfound from './components/pages/Notfound';
function App() {
  return (
  <> 
 <Nav/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/products/:name/:p' element={<ProductDesign/>}/>
    <Route path='*' element={<Notfound/>}/>
  </Routes>
  </>
  );
}

export default App;
