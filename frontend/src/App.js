import React from 'react';

import './App.css';

import logo from './assets/logo.svg';

import Routes  from './routes';

// Esse App() é uma componentização
function App() {

  return (
      <div className="container">
        <img src={logo} alt="AirCnC"></img>

        <div className="content">

          <Routes/>
          
        </div>
      </div>
  );
}

export default App;
