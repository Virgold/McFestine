import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Contact } from "./pages/Contact";
import About from "./pages/About";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  );
}

export default App;
