import React from "react";
import "./styles.css";

export default function App() {
  return <Button text />;
}

function Button({ color, disabled, text }) {
  return (
    <button type="button">
      {color}
      {disabled}
      {text}
    </button>
  );
}
