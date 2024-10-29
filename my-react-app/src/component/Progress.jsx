/* eslint-disable react/prop-types */

const Progress = ({points,index, numQuestion,sum, answr}) => {
  return (
    <header className="progress">
    <progress max={numQuestion} value={index+Number(answr !==null)}/>

     <p> Question<strong>{index+1}</strong>/ {numQuestion}</p>
     <p><strong>{points}</strong> /{sum}</p>

    </header>
  )
}

export default Progress
