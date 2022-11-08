
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Wishlist from './pages/Wishlist/Wishlist.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import ProductList from './pages/ProductList/ProductList';
import { FloatingWhatsApp } from 'react-floating-whatsapp'


function App() {
  return (
    <div className='app'>
      
      
      <FloatingWhatsApp className='floatBtn'
                        phoneNumber="+994518828994"
                        accountName="Miya Aliyeva"
                        avatar='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.T5p-BJcHWrskKyxUgR4TUwHaJQ%26pid%3DApi&f=1&ipt=27c8c9323e5d8acaeabec7d8789c3716259760d2f37b3e4bc3795a0401afe66d&ipo=images'
                        allowEsc
                        allowClickAway
                        statusMessage='Typically replies within 3-5 minutes'
                        chatMessage='Salam,Neca komek eda bilaram siza muallim? 😘)))'
                       
                        
                        />
     <Router>
     <Navbar/>
        <Routes>
              
              <Route path="/products/:categories" element={<ProductList/>} />
              <Route path="/product/:id" element={<ProductDetails/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/wishlist" element={<Wishlist/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/" element={<Home/>} />
        </Routes>

        <Footer/>
     </Router>

    </div>
  );
}

export default App;
