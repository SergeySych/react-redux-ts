import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from "../pages/HomePage";
import Facts from '../pages/Facts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/facts" element={<Facts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
