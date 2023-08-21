import avatar from "../img/avatar.jpg";
import { Image } from "./Image.js";

export function Avatar() {
  return <Image className="round-image" src={avatar} alt="avatar" />;
}
