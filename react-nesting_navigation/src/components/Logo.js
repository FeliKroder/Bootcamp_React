import logo from "../img/logo.jpg";
import { Image } from "./Image.js";
import { Link } from "./Link.js";

export function Logo() {
  return (
    <Link href="#">
      <Image src={logo} alt="logo" />
    </Link>
  );
}
