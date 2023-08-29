import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ rolls, onHandleRoll }) {
  return (
    <button className="d6-button" type="button" onClick={onHandleRoll}>
      <D6 value={rolls} />
    </button>
  );
}
