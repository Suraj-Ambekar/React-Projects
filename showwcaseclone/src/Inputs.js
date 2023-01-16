import "./Main.css";
import { useRef, useState,useEffect } from 'react';

export function Inputs() {
    const inputsRef = useRef(null);
    const starRef = useRef(null);
    const [defaultValues, setDefaultValues] = useState();
    const [defaultValuess, setDefaultValuess] = useState();
    const [defaultValuesss, setDefaultValuesss] = useState();
    const [defaultValuessss, setDefaultValuessss] = useState();

    useEffect(() => {
        console.log(inputsRef.current.innerHTML);
      }, []);
  
    const handleFocus = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleInput = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleReset = () => {
        setDefaultValues(()=> console.log(inputsRef[0].current[0].innerText));
        setDefaultValuess((prev)=> prev);
        setDefaultValuesss((prev)=> prev);
        setDefaultValuessss((prev)=> prev);
    }

    return (

        <div className="interactive-mode">
            <div className="interactive-heading">
                <h3 className="heading">CSS Demo: background-position</h3>
                <button type="button" className="reset-btn" onClick={handleReset}>RESET</button>
            </div>
            <div className="interactive-code">
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValues} contenteditable="true">
                    flex-direction: row;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    flex-direction: row-reverse;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuesss} contenteditable="true">
                    flex-direction: column;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuessss} contenteditable="true">
                    flex-direction: column-reverse;
                </code>
            </div>
            <div className="interactive-op">
                <div className="codes-op" ref={starRef}>
                    <div className="flex" >1</div>
                    <div className="flex">2</div>
                    <div className="flex">3</div>
                    <div className="flex">4</div>
                </div>
            </div>
        </div>
        
    );
}


export function Justifycontent(){
    const inputsRef = useRef(null);
    const starRef = useRef(null);
    const [defaultValues, setDefaultValues] = useState();
    const [defaultValuess, setDefaultValuess] = useState();
    const [defaultValuesss, setDefaultValuesss] = useState();
    const [defaultValuessss, setDefaultValuessss] = useState();

    useEffect(() => {
        console.log(inputsRef.current.innerHTML);
      }, []);
  
    const handleFocus = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleInput = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleReset = () => {
        setDefaultValues(()=> console.log(inputsRef[0].current[0].innerText));
        setDefaultValuess((prev)=> prev);
        setDefaultValuesss((prev)=> prev);
        setDefaultValuessss((prev)=> prev);
    }

    return(
        <div className="interactive-mode">
            <div className="interactive-heading">
                <h3 className="heading">CSS Demo: background-position</h3>
                <button type="button" className="reset-btn" onClick={handleReset}>RESET</button>
            </div>
            <div className="interactive-code">
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValues} contenteditable="true">
                    justify-content: flex-start;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    justify-content: flex-end;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuesss} contenteditable="true">
                    justify-content: center;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuessss} contenteditable="true">
                    justify-content: space-between;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuesss} contenteditable="true">
                    justify-content: space-around;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuessss} contenteditable="true">
                    justify-content: space-evenly;
                </code>
            </div>
            <div className="interactive-op">
                <div className="codes-op" ref={starRef}>
                    <div className="flex">1</div>
                    <div className="flex">2</div>
                    <div className="flex">3</div>
                    <div className="flex">4</div>
                </div>
            </div>
        </div>
        
    );
}


export function Aligncontent(){
    const inputsRef = useRef(null);
    const starRef = useRef(null);
    const [defaultValues, setDefaultValues] = useState();
    const [defaultValuess, setDefaultValuess] = useState();
    const [defaultValuesss, setDefaultValuesss] = useState();
    const [defaultValuessss, setDefaultValuessss] = useState();

    useEffect(() => {
        console.log(inputsRef.current.innerHTML);
      }, []);
  
    const handleFocus = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleInput = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleReset = () => {
        setDefaultValues(()=> console.log(inputsRef[0].current[0].innerText));
        setDefaultValuess((prev)=> prev);
        setDefaultValuesss((prev)=> prev);
        setDefaultValuessss((prev)=> prev);
    }

    return(
        <div className="interactive-mode">
            <div className="interactive-heading">
                <h3 className="heading">CSS Demo: background-position</h3>
                <button type="button" className="reset-btn" onClick={handleReset}>RESET</button>
            </div>
            <div className="interactive-code">
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValues} contenteditable="true">
                    align-content: flex-start;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    align-content: flex-end;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuesss} contenteditable="true">
                    align-content: center;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuessss} contenteditable="true">
                    align-content: space-between;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuesss} contenteditable="true">
                    align-content: space-around;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuessss} contenteditable="true">
                    align-content: space-evenly;
                </code>
            </div>
            <div className="interactive-op">
                <div className="codes-op wrap" ref={starRef}>
                    <div className="flex">1</div>
                    <div className="flex">2</div>
                    <div className="flex">3</div>
                    <div className="flex">4</div>
                    <div className="flex">5</div>
                    <div className="flex">6</div>
                    <div className="flex">7</div>
                    <div className="flex">8</div>
                    <div className="flex">9</div>
                    <div className="flex">10</div>
                </div>
            </div>
        </div>
        
    );
}



export function Alignitems(){
    const inputsRef = useRef(null);
    const starRef = useRef(null);
    const [defaultValues, setDefaultValues] = useState();
    const [defaultValuess, setDefaultValuess] = useState();
    const [defaultValuesss, setDefaultValuesss] = useState();
    const [defaultValuessss, setDefaultValuessss] = useState();

    useEffect(() => {
        console.log(inputsRef.current.innerHTML);
      }, []);
  
    const handleFocus = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleInput = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleReset = () => {
        setDefaultValues(()=> console.log(inputsRef[0].current[0].innerText));
        setDefaultValuess((prev)=> prev);
        setDefaultValuesss((prev)=> prev);
        setDefaultValuessss((prev)=> prev);
    }

    return(
        <div className="interactive-mode">
            <div className="interactive-heading">
                <h3 className="heading">CSS Demo: background-position</h3>
                <button type="button" className="reset-btn" onClick={handleReset}>RESET</button>
            </div>
            <div className="interactive-code">
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValues} contenteditable="true">
                    align-items: flex-start;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    align-items: flex-end;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuesss} contenteditable="true">
                    align-items: center;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuessss} contenteditable="true">
                    align-items: stretch;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuesss} contenteditable="true">
                    align-items: baseline;
                </code>
                {/* <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuessss} contenteditable="true">
                    justify-content: space-evenly;
                </code> */}
            </div>
            <div className="interactive-op">
                <div className="codes-op" ref={starRef}>
                    <div className="flex">1</div>
                    <div className="flex">2</div>
                    <div className="flex">3</div>
                    <div className="flex">4</div>
                </div>
            </div>
        </div>
        
    );
}


export function Alignself(){
    const inputsRef = useRef(null);
    const starRef = useRef(null);
    const [defaultValues, setDefaultValues] = useState();
    const [defaultValuess, setDefaultValuess] = useState();
    const [defaultValuesss, setDefaultValuesss] = useState();
    const [defaultValuessss, setDefaultValuessss] = useState();

    useEffect(() => {
        console.log(inputsRef.current.innerHTML);
      }, []);
  
    const handleFocus = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleInput = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleReset = () => {
        setDefaultValues(()=> console.log(inputsRef[0].current[0].innerText));
        setDefaultValuess((prev)=> prev);
        setDefaultValuesss((prev)=> prev);
        setDefaultValuessss((prev)=> prev);
    }

    return(
        <div className="interactive-mode">
            <div className="interactive-heading">
                <h3 className="heading">CSS Demo: background-position</h3>
                <button type="button" className="reset-btn" onClick={handleReset}>RESET</button>
            </div>
            <div className="interactive-code">
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValues} contenteditable="true">
                    align-self: flex-start;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    align-self: flex-end;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuesss} contenteditable="true">
                    align-self: center;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuessss} contenteditable="true">
                    align-self: stretch;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuesss} contenteditable="true">
                    align-self: baseline;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuessss} contenteditable="true">
                    align-self: auto;
                </code>
            </div>
            <div className="interactive-op">
                <div className="codes-op" >
                    <div className="flex">1</div>
                    <div className="flex" ref={starRef}>2</div>
                    <div className="flex">3</div>
                    <div className="flex">4</div>
                </div>
            </div>
        </div>
        
    );
}

export function Flexgrow(){
    const inputsRef = useRef(null);
    const starRef = useRef(null);
    const [defaultValues, setDefaultValues] = useState();
    const [defaultValuess, setDefaultValuess] = useState();
    const [defaultValuesss, setDefaultValuesss] = useState();
    const [defaultValuessss, setDefaultValuessss] = useState();

    useEffect(() => {
        console.log(inputsRef.current.innerHTML);
      }, []);
  
    const handleFocus = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleInput = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleReset = () => {
        setDefaultValues(()=> console.log(inputsRef[0].current[0].innerText));
        setDefaultValuess((prev)=> prev);
        setDefaultValuesss((prev)=> prev);
        setDefaultValuessss((prev)=> prev);
    }

    return(
        <div className="interactive-mode">
            <div className="interactive-heading">
                <h3 className="heading">CSS Demo: background-position</h3>
                <button type="button" className="reset-btn" onClick={handleReset}>RESET</button>
            </div>
            <div className="interactive-code fg">
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValues} contenteditable="true">
                    flex-grow: 1;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    flex-grow: 0;
                </code>
                {/* <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuesss} contenteditable="true">
                    flex-grow: 1;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuessss} contenteditable="true">
                    flex-grow: 4;
                </code> */}
                {/* <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuesss} contenteditable="true">
                    align-self: baseline;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuessss} contenteditable="true">
                    align-self: auto;
                </code> */}
            </div>
            <div className="interactive-op">
                <div className="codes-op" >
                    <div className="flex">1</div>
                    <div className="flex" ref={starRef}>2</div>
                    <div className="flex">3</div>
                    <div className="flex">4</div>
                </div>
            </div>
        </div>
        
    );
}

export function Flexshrink(){
    const inputsRef = useRef(null);
    const starRef = useRef(null);
    const [defaultValues, setDefaultValues] = useState();
    const [defaultValuess, setDefaultValuess] = useState();
    const [defaultValuesss, setDefaultValuesss] = useState();
    const [defaultValuessss, setDefaultValuessss] = useState();

    useEffect(() => {
        console.log(inputsRef.current.innerHTML);
      }, []);
  
    const handleFocus = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleInput = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleReset = () => {
        setDefaultValues(()=> console.log(inputsRef[0].current[0].innerText));
        setDefaultValuess((prev)=> prev);
        setDefaultValuesss((prev)=> prev);
        setDefaultValuessss((prev)=> prev);
    }

    return(
        <div className="interactive-mode">
            <div className="interactive-heading">
                <h3 className="heading">CSS Demo: background-position</h3>
                <button type="button" className="reset-btn" onClick={handleReset}>RESET</button>
            </div>
            <div className="interactive-code fg">
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValues} contenteditable="true">
                    flex-shrink: 1;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    flex-shrink: 0;
                </code>
            </div>
            <div className="interactive-op">
                <div className="codes-op" >
                    <div className="flex">1</div>
                    <div className="flex" ref={starRef}>2</div>
                    <div className="flex">3</div>
                    <div className="flex">4</div>
                </div>
            </div>
        </div>
        
    );
}

export function Flexwrap(){
    const inputsRef = useRef(null);
    const starRef = useRef(null);
    const [defaultValues, setDefaultValues] = useState();
    const [defaultValuess, setDefaultValuess] = useState();
    const [defaultValuesss, setDefaultValuesss] = useState();
    const [defaultValuessss, setDefaultValuessss] = useState();

    useEffect(() => {
        console.log(inputsRef.current.innerHTML);
      }, []);
  
    const handleFocus = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleInput = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleReset = () => {
        setDefaultValues(()=> console.log(inputsRef[0].current[0].innerText));
        setDefaultValuess((prev)=> prev);
        setDefaultValuesss((prev)=> prev);
        setDefaultValuessss((prev)=> prev);
    }

    return(
        <div className="interactive-mode">
            <div className="interactive-heading">
                <h3 className="heading">CSS Demo: background-position</h3>
                <button type="button" className="reset-btn" onClick={handleReset}>RESET</button>
            </div>
            <div className="interactive-code">
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValues} contenteditable="true">
                    flex-wrap: no-wrap;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    flex-wrap: wrap;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    flex-wrap: wrap-reverse;
                </code>
            </div>
            <div className="interactive-op">
                <div className="codes-op" ref={starRef}>
                    <div className="flex">1</div>
                    <div className="flex">2</div>
                    <div className="flex">3</div>
                    <div className="flex">4</div>
                    <div className="flex">5</div>
                    <div className="flex">6</div>
                    <div className="flex">7</div>
                    <div className="flex">8</div>
                    <div className="flex">9</div>
                    <div className="flex">10</div>
                    
                </div>
            </div>
        </div>
        
    );
}

export function Flexbasis(){
    const inputsRef = useRef(null);
    const starRef = useRef(null);
    const [defaultValues, setDefaultValues] = useState();
    const [defaultValuess, setDefaultValuess] = useState();
    const [defaultValuesss, setDefaultValuesss] = useState();
    const [defaultValuessss, setDefaultValuessss] = useState();

    useEffect(() => {
        console.log(inputsRef.current.innerHTML);
      }, []);
  
    const handleFocus = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleInput = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleReset = () => {
        setDefaultValues(()=> console.log(inputsRef[0].current[0].innerText));
        setDefaultValuess((prev)=> prev);
        setDefaultValuesss((prev)=> prev);
        setDefaultValuessss((prev)=> prev);
    }

    return(
        <div className="interactive-mode">
            <div className="interactive-heading">
                <h3 className="heading">CSS Demo: background-position</h3>
                <button type="button" className="reset-btn" onClick={handleReset}>RESET</button>
            </div>
            <div className="interactive-code fg">
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValues} contenteditable="true">
                    flex-basis: 0;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    flex-basis: auto;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    flex-basis: 200px;
                </code>
            </div>
            <div className="interactive-op">
                <div className="codes-op" >
                    <div className="flex">1</div>
                    <div className="flex" ref={starRef}>2</div>
                    <div className="flex">3</div>
                    <div className="flex">4</div>                    
                </div>
            </div>
        </div>
        
    );
}

export function Flex(){
    const inputsRef = useRef(null);
    const starRef = useRef(null);
    const [defaultValues, setDefaultValues] = useState();
    const [defaultValuess, setDefaultValuess] = useState();
    const [defaultValuesss, setDefaultValuesss] = useState();
    const [defaultValuessss, setDefaultValuessss] = useState();

    useEffect(() => {
        console.log(inputsRef.current.innerHTML);
      }, []);
  
    const handleFocus = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleInput = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleReset = () => {
        setDefaultValues(()=> console.log(inputsRef[0].current[0].innerText));
        setDefaultValuess((prev)=> prev);
        setDefaultValuesss((prev)=> prev);
        setDefaultValuessss((prev)=> prev);
    }

    return(
        <div className="interactive-mode">
            <div className="interactive-heading">
                <h3 className="heading">CSS Demo: background-position</h3>
                <button type="button" className="reset-btn" onClick={handleReset}>RESET</button>
            </div>
            <div className="interactive-code">
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValues} contenteditable="true">
                    flex: 1;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    flex: 2;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    flex: 1 30px;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    flex: 1 1 100px;
                </code>
            </div>
            <div className="interactive-op">
                <div className="codes-op" >
                    <div className="flex fl" ref={starRef}>1</div>
                    <div className="flex fl" >2</div>
                    <div className="flex fl">3</div>
                    <div className="flex fl">4</div>                    
                </div>
            </div>
        </div>
        
    );
}

export function Flexflow(){
    const inputsRef = useRef(null);
    const starRef = useRef(null);
    const [defaultValues, setDefaultValues] = useState();
    const [defaultValuess, setDefaultValuess] = useState();
    const [defaultValuesss, setDefaultValuesss] = useState();
    const [defaultValuessss, setDefaultValuessss] = useState();

    useEffect(() => {
        console.log(inputsRef.current.innerHTML);
      }, []);
  
    const handleFocus = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleInput = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleReset = () => {
        setDefaultValues(()=> console.log(inputsRef[0].current[0].innerText));
        setDefaultValuess((prev)=> prev);
        setDefaultValuesss((prev)=> prev);
        setDefaultValuessss((prev)=> prev);
    }

    return(
        <div className="interactive-mode">
            <div className="interactive-heading">
                <h3 className="heading">CSS Demo: background-position</h3>
                <button type="button" className="reset-btn" onClick={handleReset}>RESET</button>
            </div>
            <div className="interactive-code">
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValues} contenteditable="true">
                    flex-flow: row wrap;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    flex-flow: row-reverse nowrap;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    flex-flow: column wrap;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    flex-flow: column wrap-reverse;
                </code>
            </div>
            <div className="interactive-op">
                <div className="codes-op" ref={starRef}>
                    <div className="flex">1</div>
                    <div className="flex" >2</div>
                    <div className="flex">3</div>
                    <div className="flex">4</div>
                    <div className="flex">5</div>
                    <div className="flex">6</div>
                    <div className="flex">7</div>
                    <div className="flex">8</div>                    
                </div>
            </div>
        </div>
        
    );
}

export function Placecontent(){
    const inputsRef = useRef(null);
    const starRef = useRef(null);
    const [defaultValues, setDefaultValues] = useState();
    const [defaultValuess, setDefaultValuess] = useState();
    const [defaultValuesss, setDefaultValuesss] = useState();
    const [defaultValuessss, setDefaultValuessss] = useState();

    useEffect(() => {
        console.log(inputsRef.current.innerHTML);
      }, []);
  
    const handleFocus = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleInput = (e) => {
      starRef.current.style.cssText = e.target.textContent;
    }
  
    const handleReset = () => {
        setDefaultValues(()=> console.log(inputsRef[0].current[0].innerText));
        setDefaultValuess((prev)=> prev);
        setDefaultValuesss((prev)=> prev);
        setDefaultValuessss((prev)=> prev);
    }

    return(
        <div className="interactive-mode">
            <div className="interactive-heading">
                <h3 className="heading">CSS Demo: background-position</h3>
                <button type="button" className="reset-btn" onClick={handleReset}>RESET</button>
            </div>
            <div className="interactive-code">
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValues} contenteditable="true">
                    place-content: end space-between;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    place-content: space-around start;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    place-content: start space-evenly;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    place-content: end center;
                </code>
                <code className="input" ref={inputsRef} onFocus={handleFocus} onInput={handleInput} value={defaultValuess} contenteditable="true">
                    place-content: end;
                </code>
            </div>
            <div className="interactive-op">
                <div className="codes-op wrap" ref={starRef}>
                    <div className="flex">1</div>
                    <div className="flex" >2</div>
                    <div className="flex">3</div>
                    <div className="flex">4</div>
                    <div className="flex">5</div>                   
                </div>
            </div>
        </div>
        
    );
}