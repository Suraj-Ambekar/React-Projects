import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const show = useSelector(state=> state.showCounter)
  const dispatch = useDispatch();

  const increamentHandler = () => {
    dispatch(counterActions.increament());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  }

  const decreamentHandler = () => {
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
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
