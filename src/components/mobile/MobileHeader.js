import { useRef } from "react";
import MobileNav from "./MobileNav";

import Logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";




export default function MobileHeader() {
  const navRef = useRef(null);

  const handleOnHamburgerMenuClick = (e) => {
    if (navRef.current) {
      navRef.current.classList.toggle("show-mobile-nav");
    }
    e.stopPropagation();
  };


  return (
    <header>
      <FontAwesomeIcon
        icon={faBars}
        size="2x"
        onClick={handleOnHamburgerMenuClick}
      />
      <img src={Logo} alt="a little lemon" />
      <MobileNav ref={navRef} />
      <FontAwesomeIcon
        className="mobile-cart"
        icon={faCartShopping}
        size="2x"
      />
    </header>
  );
}
