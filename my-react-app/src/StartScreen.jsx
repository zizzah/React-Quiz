/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
const StartScreen = ({numbQuest,dispatch,mode}) => {

  const validModes = ['beginner', 'intermediate', 'senior','bible','maths','english'];
  const hasAnswered = !validModes.includes(mode); 

function handleClick(){
    dispatch({type:'start'})
}
  return (
    <div className="start">
       {mode==='bible' ||mode==='maths'|| mode==='english'? <h2>Welcome To The {mode}  Quiz
         </h2>:<h2>Welcome To {mode} React  Quiz </h2>}

        <h3>{numbQuest} Questions to test your {mode} mastry</h3>

        <button className="btn btn-ui"  disabled={hasAnswered}  onClick={handleClick}>let's start</button>
    </div>
  )
}

export default StartScreen
