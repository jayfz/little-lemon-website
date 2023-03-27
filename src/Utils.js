import greekSalad from './images/greek-salad.jpg';
import lemmonDessert from './images/lemon-dessert.jpg';

const foodMenuItems = [
    {
      name: "Greek Salad",
      text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: "$12.99",
      image : greekSalad
    },
    {
      name: "Lemmon Dessert",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
      price: "$6.99",
      image: lemmonDessert

    },
    {
      name: "Brushetta",
      text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
      price: "$7.99",
      image: greekSalad
    },
    {
      name: "Grilled Fish",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
      price: "$20.00",
      image: greekSalad

    },
    {
      name: "Pasta",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
      price: "$18.99",
      image: greekSalad

    }
  ];


const clamp = (text, upTo) => {
  const clamppedText = text.substring(0, upTo).trim();
  return `${clamppedText}...`;
}

export  {
    foodMenuItems,
    clamp
}