
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Appointment from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Navbar from './Components/Navbar/Navbar';
import Order from './Components/OrderFood/Order';
import OrderFood from './Components/OrderFood/OrderFood';


function App() {
  return (
    <div >
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Appointment></Appointment>}></Route>
      <Route path="home" element={<Appointment></Appointment>}></Route>
      <Route path='order' element={<Order></Order>}>
      </Route>
       
      <Route path="login" element={<Login></Login>}></Route>
      <Route path="register" element={<Register></Register>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
