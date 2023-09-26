<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/hompage/HomePage'
import ContactUs from './components/contact/ContactUs'

function App() {

  return (
    <div>
      {/* <HomePage /> */}
      <ContactUs />
    </div>
  )
=======
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Footer } from "./components/common/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Footer />
    </>
  );
>>>>>>> db5ff249e8f3f393a0e4f3741aebde6ba9893258
}

export default App;
