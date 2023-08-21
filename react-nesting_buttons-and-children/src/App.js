import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>On</Button>
      <Button>Off</Button>
      <Button>Silent</Button>
      <Button>Loud</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
