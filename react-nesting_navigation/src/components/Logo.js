import logo from "../img/logo.jpg";
import { Image } from "./Image.js";

export function Logo() {
  return <Image className="round-image" src={logo} alt="logo" />;
}
