import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Barplot } from "./viz/Barplot";
import { data } from "./data/data";

function App() {
  const [count, setCount] = useState(0);

  console.log("set count is ok");
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>

      <Barplot data={data} width={700} height={400} />
    </>
  );
}

export default App;
