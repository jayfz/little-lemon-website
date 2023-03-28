import Hero from "./Hero";
import FilterPills from "./mobile/FilterPills";
import MobileFoodMenu from "./mobile/MobileFoodMenu";
import { useDeviceContext } from "../context/deviceContext";
import Specials from "./Specials";
import BookingPage from "./BookingPage";

export default function Main() {
  const viewport = useDeviceContext();


  if (viewport.isMobile) {
    return (
      <main>
        <Hero />
        <FilterPills />
        <MobileFoodMenu />
      </main>
    );
  }
  return (
    <main>
      <Hero />
      <Specials />
    </main>
  );
}
