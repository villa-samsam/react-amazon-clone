import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='app'>
      <Header />
        <Routes>
          {/* Route for the home page */}
          <Route path='/' element={
          <>
            <Home />
          </>
          } />


          {/* Route for the checkout page */}
          <Route path='/checkout' element={
          <> 
            <Checkout/>
          </>
          } />

        </Routes>

      </div>

    </Router>



  );
}

export default App;
