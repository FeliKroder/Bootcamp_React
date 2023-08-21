export default function Navigation({ children }) {
  return (
    <nav>
      {children}
      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      ></button>
    </nav>
  );
}
