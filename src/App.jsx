import { useState } from "react";
import "./App.css";
import HomePage from "./components/hompage/HomePage";
import ContactUs from "./components/contact/ContactUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomePage />
      {/* <ContactUs/> */}
    </>
  );
}

export default App;
