import { useState } from "react";

export default function ClickCounter() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return <button onClick={handleClick}>Clicked: {clicks}</button>;
}
