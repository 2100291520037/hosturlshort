import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { getApps } from './utils/helper'
// import { useState } from "react";

function App() {

  const CurrentApp = getApps();

  return (
    <Router>
      <CurrentApp />
    </Router>
  )
  // return (
  //   <>
  //   <h1 className="text-5x1 font-bold underline">
  //     Hellow world!
  //   </h1>
  //   </>
  // )
}

export default App
