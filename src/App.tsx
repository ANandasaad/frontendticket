import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <Header />
      <Body />
    </div>
  );
}

export default App;
