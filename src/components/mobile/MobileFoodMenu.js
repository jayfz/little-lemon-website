import { foodMenuItems, clamp } from "../../Utils";

function FoodMenuListItem({ name, text, price }) {

  let clamppedText = text;

  if(text.length > 96){
    clamppedText = clamp(text, 96);
  }

  return (
    <div className="food-menu-item">
      <h3>{name}</h3>
      <p>{clamppedText}</p>
      <span>${price}</span>
    </div>
  );
}

export default function MobileFoodMenu() {
  

  return (<div className="food-menu">
    {foodMenuItems.map((listItem, index) => {
      return <FoodMenuListItem key={index} {...listItem}/>
    })}
  </div>);
}
