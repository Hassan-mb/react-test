import React, { useState } from "react";
import "../Assets/css/main.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Visitors Count = {count}</button>
    </div>
  );
}
