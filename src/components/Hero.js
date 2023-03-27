import { useDeviceContext } from "../context/deviceContext";
import heroImage from "../images/restauranfood.jpg";

export default function Hero() {

  const viewport = useDeviceContext();
  return (
    <div className="hero">
      <article>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranian restaurant focused on traditional
          recepies served with a modern twist
        </p>
        {viewport.isMobile && <img src={heroImage} alt="a server holding plates in a tray" />}
        <button className="action-button">Reserve a table </button>
      </article>
      {!viewport.isMobile && <img src={heroImage} alt="a server holding plates in a tray" />}
    </div>
  );
}
