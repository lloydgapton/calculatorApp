import logo from './logo.svg';
import './App.css';

import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 

  function handleDigitClick(digit) {
    return(e=>{
      e.preventDefault();
      inputRef.current.value = inputRef.current.value + digit;
    });
  }
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = ""; 
  }; 
 
  function resetResult(e) { 
  	e.preventDefault();
    setResult(0); 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <div className='result-box'>
        <p className='result' ref={resultRef}>
          Result: {result}
        </p>
      </div>
      <form className="operations">
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="text" 
          placeholder="Type a number" 
        /> 
        <button onClick={(e)=> handleDigitClick("0")(e)}>0</button>
        <button onClick={(e)=> handleDigitClick("1")(e)}>1</button>
        <button onClick={(e)=> handleDigitClick("2")(e)}>2</button>
        <button onClick={(e)=> handleDigitClick("3")(e)}>3</button>
        <button onClick={(e)=> handleDigitClick("4")(e)}>4</button>
        <button onClick={(e)=> handleDigitClick("5")(e)}>5</button>
        <button onClick={(e)=> handleDigitClick("6")(e)}>6</button>
        <button onClick={(e)=> handleDigitClick("7")(e)}>7</button>
        <button onClick={(e)=> handleDigitClick("8")(e)}>8</button>
        <button onClick={(e)=> handleDigitClick("9")(e)}>9</button>
        <button onClick={plus}>Add</button> 
        <button onClick={minus}>Subtract</button> 
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 

