import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increamentHandler = () => {
    dispatch({type: 'INCREMENT'});
  }
  const decreamentHandler = () => {
    dispatch({type: 'DECREMENT'});
  }




  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increamentHandler}>INCREMENT</button>
        <button onClick={decreamentHandler}>DECREMENT</button>
      </div>      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
