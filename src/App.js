import React, { Suspense } from 'react';
import './App.css';


import {  Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import YouKnow from './Pages/YouKnow/YouKnow'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


function App() {

 // Utilizare lazy loading pentru FormContact pentru performanță
 const FormContact = React.lazy(() => import("./Pages/FormContact/FormContact"));
 

  return (
    <div className="App">
       
       <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={ <Suspense fallback={<div>Loading...</div>}>
                <FormContact />
              </Suspense>}/>
        <Route path='/youknow' element={<YouKnow/>}/>
      </Routes>
  
 
     
    </div>
  );
}

export default App;
