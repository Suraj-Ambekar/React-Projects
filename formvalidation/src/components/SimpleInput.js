import React from 'react'
// import { useRef } from 'react';
import useInput from '../hooks/use-input';



const SimpleInput = (props) => {

  const { 
    value: enteredName, 
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: changeHandler,
    nameInputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail, 
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    nameInputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.includes("@"))

  // const enteredValue = useRef();
  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid){ //we can do this to without using useEffect
    formIsValid = true;
  }

  // useEffect(()=>{
  //   if(enteredNameValid){
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameValid])


  function onSubmitHandler(event) {
    event.preventDefault();

    if (!enteredNameIsValid){
      return;
    }

    // setEnteredNameValid(true);
    console.log(enteredName);

    // const curr = enteredValue.current.value;
    // if (curr.trim() === ''){
    //   return;
    // }
    // console.log(curr);
    resetNameInput();

    resetEmailInput();
  }



  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

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
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && <p className="error-text">Input is wrong</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
          value={enteredEmail} 
          type='email' 
          id='email' 
          onChange={emailChangeHandler}  
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className="error-text">Please enter a valid email.</p>}
      </div>


      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
