import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setNotActive] = useState(false);
  console.log(isActive);

  function handleClick() {
    setNotActive(!isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}
