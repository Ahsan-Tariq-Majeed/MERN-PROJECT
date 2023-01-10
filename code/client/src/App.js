import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { Routes, Route} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';
import Institute from './components/Institute';
import Edit from './components/Edit';
import Details from './components/Details';
import Admin from './components/Admin';
import AdminLogin from './components/AdminLogin';
import Adminlogin from './components/AdminLogin';
import { FooterContainer } from './components/FooterContainer';
import InstituteProfile from './components/InstituteProfile';




function App() {
  return (
    <>
    <Navbar/>
    <FooterContainer/>

   <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />  
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Errorpage />} />
        <Route exact path="/institute" element={<Institute />} />
        <Route exact path="/edit/:id" element={<Edit/>} />
        <Route exact path="/view/:id" element={<Details/>} />
        <Route exact path="/adminlogin" element={<Adminlogin/>} />
        <Route exact path="/admin" element={<Admin/>} />
        <Route exact path="/instituteProfile" element={<InstituteProfile/>} />

       

    </Routes>
    
    </>
  );
}

export default App;
