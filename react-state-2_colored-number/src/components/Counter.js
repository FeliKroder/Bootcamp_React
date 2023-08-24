import ColoredNumber from "./ColoredNumber";

export default function Counter({ bla, setCount }) {
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={bla} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => setCount(bla + 1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => setCount(bla - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
