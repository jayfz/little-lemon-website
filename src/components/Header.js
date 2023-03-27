import Nav from "./Nav";
import MobileHeader from "./mobile/MobileHeader";
import Logo from "../images/logo.png";
import { useDeviceContext } from "../context/deviceContext";


export default function Header() {

  const viewport = useDeviceContext();

  if(viewport.isMobile){
    return  <MobileHeader />
  }

  return (
    <header>
      <img src={Logo} alt="a little lemon" />
      <Nav />
    </header>
  );
}
