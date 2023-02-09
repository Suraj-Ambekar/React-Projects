
import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    function valueChangeHandler(event) {
        setEnteredValue(event.target.value);
    }
    
      function nameInputBlurHandler() {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false);
    }

    return {
        value: enteredValue, hasError, valueChangeHandler, nameInputBlurHandler, isValid: valueIsValid, reset,
    }
}

export default useInput;