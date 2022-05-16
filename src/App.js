import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import CarouselLibrary from './Pages/Home/CarouselLibrary/CarouselLibrary';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login'
import Register from './Pages/Login/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import AddService from './Pages/AddService/AddService';
import ManageService from './Pages/ManageService/ManageService';
import { ToastContainer } from 'react-toastify';
import Orders from './Pages/Orders/Orders';

function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/carousellibrary" element={<CarouselLibrary></CarouselLibrary>}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout/:serviceId" element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }></Route>
          <Route path="/addservice" element={
            <RequireAuth>
              <AddService />
            </RequireAuth>
          } />
          <Route path="/manage" element={
            <RequireAuth>
              <ManageService />
            </RequireAuth>
          } />
          <Route path="/orders" element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer></Footer>
      <ToastContainer autoClose='100' Limit="1"/>
    </div>
  );
}

export default App;
