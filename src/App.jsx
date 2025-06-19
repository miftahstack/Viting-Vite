import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

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
