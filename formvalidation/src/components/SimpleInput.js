import React from 'react'
import { useState, useRef } from 'react';


const SimpleInput = (props) => {

  const enteredValue = useRef();

  const [enteredName, setEnteredName] = useState('');

  const [enteredNameValid, setEnteredNameValid] = useState(true);

  function changeHandler(event) {
    setEnteredName(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    if (enteredName.trim() === ''){
      setEnteredNameValid(false)
      return;
    }

    setEnteredNameValid(true);
    console.log(enteredName);

    const curr = enteredValue.current.value;
    if (curr.trim() === ''){
      return;
    }
    console.log(curr);
    setEnteredName('')
  }

  const nameInputClasses = enteredNameValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} ref={enteredValue} type='text' id='name' onChange={changeHandler}  />
        {!enteredNameValid && <p className="error-text">Input is wrong</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
