import "./styles.css";

export default function App() {
  return <Greeting name="Luisa" />;
}

function Greeting({ name }) {
  return <div>{name === "Niklas" ? `Hello, Coach!` : `Hello, ${name}!`}</div>;
}
