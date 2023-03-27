import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import { clamp } from "../Utils";

export default function MenuCard({ image, name, price, text }) {
  let clamppedText = text;

  if (text.length > 120) {
    clamppedText = clamp(text, 120);
  }

  return (
    <div className="menu-card">
      <img src={image} />
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <p alt={clamppedText}>{clamppedText}</p>
      <button>
        Order a delivery <FontAwesomeIcon icon={faBicycle} size={"1x"} />{" "}
      </button>
    </div>
  );
}
