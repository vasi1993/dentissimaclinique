import React from 'react';
import './App.css';

import Footer from './Components/Footer/Footer';

import Navbar from './Components/Navbar/Navbar';

import { Route, Routes } from 'react-router-dom';
import FormContact from './Pages/FormContact/FormContact';
import Home from './Pages/Home/Home';
import YouKnow from './Pages/YouKnow/YouKnow'

function App() {

 

  return (
    <div className="App">
       
       
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<FormContact/>}/>
        <Route path='/youknow' element={<YouKnow/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
