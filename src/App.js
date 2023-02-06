import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import Notfound from './components/Notfound';
import Login from './components/Login';
import Blog_details from './components/Blog_details';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Registration from './components/Registration';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='*' element ={<Notfound/>}/>
      <Route path='/' element ={<Home/>}/>
      <Route path='/blog_details' element ={<Blog_details/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/register' element ={<Registration/>}/>
      <Route path='/blog_details/:id' element ={<Blog_details/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
