import { useState } from "react"

const Counter = () => {
  // Using useState to initialize count state with an initial value of 0
  const [count, setCount] = useState(0);

  // Event handler to increment count
  const increment = () => {
    // Using the setCount function to update the count state
    setCount(count + 1);
  };

  return (
    <div>
      <h2>useState fn:</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
};

export default Counter;
