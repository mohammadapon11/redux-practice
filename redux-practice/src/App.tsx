import { useAppDispatch, useAppSelector } from "./redux/hook";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counter/counterSlice";

const App = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex items-center gap-10">
        <button
          onClick={() => dispatch(incrementByValue(10))}
          className="border px-10 py-3 rounded-md border-red-500"
        >
          Increment by Value
        </button>{" "}
        <button
          onClick={() => dispatch(increment())}
          className="border px-10 py-3 rounded-md border-red-500"
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
          className="border px-10 py-3 rounded-md border-green-500"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
