import React, { useState } from 'react'
import './App.css';
import Weather from './component/weather';
const api = {
  key: "5a0ae79ff330ce9be729c8b96027b1f9",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  

  return (
   <Weather/>
  );
}

export default App;
