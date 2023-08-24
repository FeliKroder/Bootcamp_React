import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [blubb, setCounter] = useState(0);
  return <Counter bla={blubb} setCount={setCounter} />;
}
