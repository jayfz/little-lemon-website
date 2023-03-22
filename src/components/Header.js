import Logo from "../images/logo.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="a little lemon" />
      <Nav />
    </header>
  );
}
