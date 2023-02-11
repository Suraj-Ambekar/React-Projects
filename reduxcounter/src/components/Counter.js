import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const show = useSelector(state=> state.showCounter)
  const dispatch = useDispatch();

  const increamentHandler = () => {
    dispatch({type: 'INCREMENT'});
  }

  const increaseHandler = () => {
    dispatch({type: 'INCREASE', amount: 5})
  }

  const decreamentHandler = () => {
    dispatch({type: 'DECREMENT'});
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'TOGGLE'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>INCREMENT</button>
        <button onClick={increaseHandler}>INCREASE BY 5</button>
        <button onClick={decreamentHandler}>DECREMENT</button>
      </div>      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
