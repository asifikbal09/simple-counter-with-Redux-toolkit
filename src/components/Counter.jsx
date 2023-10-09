import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAction } from "../redux/features/counter/CounterSlice";

const Counter = () => {
    const {count}=useSelector(state=>state.counter)
    const dispatch =useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(incrementByAction(5))}>Increment 5</button> <br />
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <div>
            <h1>{count}</h1>
        </div>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default Counter;
