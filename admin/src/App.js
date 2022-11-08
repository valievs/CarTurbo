import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Home from './pages/Home/Home.jsx';
import Cars from './pages/Car/Car.jsx'
import CarItem from './pages/CarItem/CarItem.jsx'
import AddCar from './pages/AddCar/AddCar.jsx'
import Login from './pages/Login/Login';


function App() {
  return (
            <Router>
       <>
       
          <Navbar/>

        <div className="container">
        <Sidebar/>


        <Routes>
        <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/cars" element={<Cars/>} />
          <Route path="/cars/:carId" element={<CarItem/>} />
          <Route path="/add" element={<AddCar/>} />
          
        </Routes>
        </div>
       </>
            </Router>
  );
}

export default App;
