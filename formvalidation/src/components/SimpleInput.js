import React from 'react'
import { useState} from 'react';
// import { useRef } from 'react';


const SimpleInput = (props) => {

  // const enteredValue = useRef();

  const [enteredName, setEnteredName] = useState('');

  // const [enteredNameValid, setEnteredNameValid] = useState(false);

  const [enteredNameValidTouch, setEnteredNameValidTouch] = useState(false);

  // const[formIsValid, setFormIsValid] = useState(false);

  const enteredNameValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameValid && enteredNameValidTouch;

  let formIsValid = false;

  if(enteredNameValid){ //we can do this to without using useEffect
    formIsValid(true);
  }

  // useEffect(()=>{
  //   if(enteredNameValid){
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameValid])

  function changeHandler(event) {
    setEnteredName(event.target.value);

    // if (event.target.value.trim() !== ''){
    //   setEnteredNameValid(true)
    // }
  }

  function nameInputBlurHandler() {
    setEnteredNameValidTouch(true);



    // if (enteredName.trim() === ''){
    //   setEnteredNameValid(false)
    // }
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    setEnteredNameValidTouch(true)

    if (!enteredNameValid){
      return;
    }

    // setEnteredNameValid(true);
    console.log(enteredName);

    // const curr = enteredValue.current.value;
    // if (curr.trim() === ''){
    //   return;
    // }
    // console.log(curr);
    setEnteredName('')
    setEnteredNameValidTouch(false)
  }



  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          value={enteredName} 
          // ref={enteredValue} 
          type='text' 
          id='name' 
          onChange={changeHandler}  
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && <p className="error-text">Input is wrong</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
