import MenuCard from './MenuCard';
import { foodMenuItems } from "../Utils";

export default function Specials() {
  return (
    <section className="specials">
      <div className="specials-head">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className="specials-body">
        {
            foodMenuItems.slice(0,3).map( menuItem => <MenuCard key={menuItem.name} {...menuItem}/>)
        }
      </div>
    </section>
  );
}
