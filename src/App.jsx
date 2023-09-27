import { useState } from "react";
import "./App.css";
<<<<<<< HEAD
import HomePage from "./components/hompage/HomePage";
=======
import HomePage from "./pages/HomePage";
>>>>>>> 48f55b9f6a11cfa1c6ce688af7f4701a45ca027e

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
