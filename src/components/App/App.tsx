import Product from "../Product/Product";
import Mailbox from "../Mailbox/Mailbox";
import Book from "../Book/Book";
import Button from "../Button/Button";
// 1. Імпортуємо функцію useState
import { useState } from "react";
import ClickCounter from "../ClickCounter/ClickCounter";

export default function App() {
  /* const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked!", event);
    console.log("Target:", event.target); // сам <button>
  };*/
  // 2. Оголошуємо стан clicks
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    // 3. Використовуємо setClicks для зміни стану clicks
    setClicks(clicks + 1);
  };
  return (
    <>
      <h1>Products</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />

      <Mailbox
        username="John"
        messages={["Welcome!", "Don't miss our sale!"]}
      />

      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" />
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleClick}>Current: {clicks}</button>
      <ClickCounter />
      <ClickCounter />
      <Book />
    </>
  );
}
