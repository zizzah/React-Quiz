/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Options from "./Options"

// eslint-disable-next-line react/prop-types
const Questions = ({ questions,dispatch,answer}) => {
    // eslint-disable-next-line no-unused-vars
    return (
        <div className="questions">

          <h4>{questions.question}</h4>
           <Options question={questions} dispatch={dispatch} answer={answer}/>
        </div>
    )
}

export default Questions
