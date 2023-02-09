import React from 'react'
import { useState} from 'react';
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

  // const enteredValue = useRef();

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailValidTouch, setEnteredEmailValidTouch] = useState(false);

  // const [enteredNameValid, setEnteredNameValid] = useState(false);
  // const[formIsValid, setFormIsValid] = useState(false);

  const enteredEmailValid = enteredEmail.includes("@");
  const enteredEmailInvalid = !enteredEmailValid && enteredEmailValidTouch;


  // console.log(enteredEmailValid);


  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailValid){ //we can do this to without using useEffect
    formIsValid = true;
  }

  // useEffect(()=>{
  //   if(enteredNameValid){
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameValid])

  function changeEmailHandler(event) {
    setEnteredEmail(event.target.value);

  }

  function emailInputBlurHandler() {
    setEnteredEmailValidTouch(true);
    // if (enteredName.trim() === ''){
    //   setEnteredNameValid(false)
    // }
  }

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

    setEnteredEmail('');
    setEnteredEmailValidTouch(false)
  }



  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = enteredEmailInvalid ? 'form-control invalid' : 'form-control';

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
          onChange={changeEmailHandler}  
          onBlur={emailInputBlurHandler}
        />
        {enteredEmailInvalid && <p className="error-text">Please enter a valid email.</p>}
      </div>


      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
