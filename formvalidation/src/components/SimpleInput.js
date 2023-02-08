import React from 'react'
import { useState, useRef } from 'react';


const SimpleInput = (props) => {

  const enteredValue = useRef();

  const [enteredName, setEnteredName] = useState('');

  function changeHandler(event) {
    setEnteredName(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    console.log(enteredName);

    const curr = enteredValue.current.value;
    console.log(curr);
    setEnteredName('')
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} ref={enteredValue} type='text' id='name' onChange={changeHandler}  />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
