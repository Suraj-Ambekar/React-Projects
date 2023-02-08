import React from 'react'
import { useState, useRef } from 'react';


const SimpleInput = (props) => {

  const enteredValue = useRef();

  const [enteredName, setEnteredName] = useState('');

  const [enteredNameValid, setEnteredNameValid] = useState(false);

  const [enteredNameValidTouch, setEnteredNameValidTouch] = useState(false);

  function changeHandler(event) {
    setEnteredName(event.target.value);
  }

  function nameInputBlurHandler() {
    setEnteredNameValidTouch(true);

    if (enteredName.trim() === ''){
      setEnteredNameValid(false)
      return;
    }
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    setEnteredNameValidTouch(true)

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

  const nameInputIsInvalid = !enteredNameValid && enteredNameValidTouch;

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          value={enteredName} 
          ref={enteredValue} 
          type='text' 
          id='name' 
          onChange={changeHandler}  
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && <p className="error-text">Input is wrong</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
