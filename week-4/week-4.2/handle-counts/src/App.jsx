import React, { useState } from 'react';

function App() {
  // State variable 'count' and the function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Function to handle button click and update the count
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleButtonClick}>Increase Count</button>
    </div>
  );
}

export default App;
