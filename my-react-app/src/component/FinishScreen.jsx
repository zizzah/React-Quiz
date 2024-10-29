/* eslint-disable react/prop-types */

const FinishScreen = ({score, sum, highscore, dispatch}) => {
    const percentage = (score/sum) * 100;


    let emoji;
    if(percentage === 100)  emoji='🎖️'
    if(percentage >=80 && percentage <  100)  emoji='🎉'
    if(percentage >=50 && percentage <  80)  emoji='😂'
    if(percentage >=0 && percentage <  50)  emoji='😡'
    if(percentage ===0 )  emoji='😭'


    return (
        <>
        <p className="result">
        <span>{emoji}</span>  you scored <strong>{score}</strong> out of  {sum}

      (   {Math.ceil(percentage)}% )
        </p>
          <p className="highscore">(Highscore : {highscore})</p>
          <div style={{display:'flex',flexDirection:'row', gap:'2rem', justifyContent:'center', alignItems:'center'}}>

          <button className="btn btn-ui" onClick={()=>dispatch({type:'back'})}>Back To Home</button>
      {percentage < 75  && <button  className="btn btn-ui" onClick={()=>dispatch({type:'retake'})}>Retake the test</button>}  


          </div>
        </>
    )
}

export default FinishScreen
