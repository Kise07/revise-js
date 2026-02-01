import { useRecoilState, useRecoilValue } from "recoil"
import { countState } from "../stores/atoms/countState"
import { countIsEven } from "../stores/selectors/countIsEven";

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);
  const isEven = useRecoilValue(countIsEven);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      {isEven && <p>It is EVEN</p>}
    </div>
  );
};

export default Counter;
