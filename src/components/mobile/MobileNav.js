import { forwardRef, useEffect } from "react";
import Logo from "../../images/logo-lemon-monochrome.png";
import Nav from "../Nav";

const MobileNav = forwardRef(function MobileNav(props, ref) {
  const toggleDrawer = (e) => {
    ref.current.classList.toggle("show-mobile-nav");
  };

  useEffect(() => {
    const toggleIfDrawerIsShown = () => {
      if (ref.current.className.includes("show-mobile-nav")) {
        toggleDrawer();
      }
      console.log("hey");
    };

    document.addEventListener("click", toggleIfDrawerIsShown);
    return () => {
      document.removeEventListener("click", toggleIfDrawerIsShown);
    };
  }, []);

  return (
    <div className="mobile-nav" ref={ref}>
      <div className="mobile-nav-header">
        <img src={Logo} alt="a little lemon" />
        <span> Little Lemon </span>
      </div>
      <Nav />
    </div>
  );
});

export default MobileNav;
