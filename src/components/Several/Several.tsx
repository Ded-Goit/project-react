import { useState } from "react";

export default function Several() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
  };

  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick}>Clicked: {count}</button>
      <button onClick={toggleMessage}>
        {isOpen ? "Hide message" : "Show message"}
      </button>

      {isOpen && <p>🎉 Surprise! You toggled me.</p>}
    </>
  );
}
