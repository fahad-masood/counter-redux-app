import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./action";

function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
    </div>
  );
}

export default App;
