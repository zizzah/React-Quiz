import {  useReducer } from "react";
  const initailState= {
        count:0, step:1
    }
function reducre(state,action) {
  switch(action.type){

    case 'dec':
      return {...state, count:state.count-state.step}

    case 'inc':
      return {...state, count:state.count+state.step}
          case 'setCount':
      return {...state, count:action.payload||0}
                case 'setStep':
      return {...state, step:action.payload||0}
                      case 'reset':
      return initailState




      default :
      throw new Error('Unknown action ')
  }
}

function DateCounter() {

  
  const [state, dispatch] = useReducer(reducre, initailState);

  const {count, step}   = state
  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
   // setCount((count) => count - step);
    dispatch({type:'dec',payload:1})
  };

  const inc = function () {
    // setCount((count) => count + 1);
  //  setCount((count) => count + step);
    dispatch({type:'inc',payload:1})
  };

  const defineCount = function (e) {
   // setCount(Number(e.target.value));
    dispatch({type:'setCount', payload:Number(e.target.value)})
  };

  const defineStep = function (e) {
    dispatch({type:'setStep', payload:Number(e.target.value)})
    
  };

  const reset = function () {
    dispatch({type:'reset'})
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
