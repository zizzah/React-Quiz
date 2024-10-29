/* eslint-disable react/prop-types */
import { useEffect } from "react"

const Timer = ({dispatch,remaingTime}) => {
    const min = Math.floor(remaingTime/60);
    const sec = remaingTime % 60;

    useEffect(function(){
    const id =    setInterval(function(){
        dispatch({type:'tick'})
        },1000)
return ()=> clearInterval(id)


    },[dispatch])
    return (
        <div className="timer">
            {min <10 &&'0'}
            {min}
            {sec <10 &&'0'}
            :{sec}
        </div>
    )
}

export default Timer
