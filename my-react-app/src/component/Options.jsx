/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect } from "react"

const Options = ({question, dispatch, answer}) => {

    const {options,  points, correctOption} = question
    const hasAnswered = answer !==null
     
    useEffect(function(){
     
    },[answer])
    function handleCliks(e){
      dispatch({type:'newAnswer', payload:e})
    }
    return (
 <div className="options">

{options.map((option,index)=><button className={`btn btn-option ${index ===answer?'answer':''}
${hasAnswered? index===correctOption?'correct':'wrong':''}`}
   key={option} onClick={()=>handleCliks(index)} disabled={hasAnswered} >
   {option}
</button>)}
</div>

    
    )
}

export default Options
