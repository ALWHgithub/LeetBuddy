import { useState } from 'react'
import {BrowserRouter,Routes,Route,Link,
} from "react-router-dom";

import './App.css'
import Detail from './pages/detail';
import Home from './pages/home';



function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
    </Routes>
  )
}

export default App
