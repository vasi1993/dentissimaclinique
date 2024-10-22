import React from 'react';
import './App.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormContact from './Pages/FormContact/FormContact';
import Home from './Pages/Home/Home';
import YouKnow from './Pages/YouKnow/YouKnow'

function App() {

 

  return (
    <div className="App">
       
       
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<FormContact/>}/>
        <Route path='/youknow' element={<YouKnow/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
