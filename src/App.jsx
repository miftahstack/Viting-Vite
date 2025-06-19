import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Title from "./components/Title";
import Navbar from "./components/Navbar";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <Title/>
      <Button />
    </>
  );
}

export default App;
