/* eslint-disable no-unused-vars */
import {useEffect, useReducer} from 'react'

import './App.css'
import Header from './Header'
import DateCounter from './DateCounter'
import MainPage from './MainPage'
import Loader from './Loader'
import Error from './Error'
import StartScreen from './StartScreen'
import Questions from './component/Questions'
import NextButton from './NextButton'
import Progress from './component/Progress'
import FinishScreen from './component/FinishScreen'
import Footer from './component/Footer'
import Timer from './component/Timer'
import Mode from './component/Mode'

const SEC_PER_QUESTION= 30;
const initailState ={
  questions:[],
  status:'loading',
  mode:null,
  index:0,
  answer:null,
  points:0,
  highscore:0,
  remaingTime:null,
}

  function reducer(state,action){
     switch(action.type){
      case 'dataReceived':
        return  {...state, questions:action.payload, status:'ready'}

        case 'dataFailed':
          return {...state, status:'error'}
          case 'mode':
            return{ ...state, mode:action.payload}
          case 'start':

            return {...state, status:'active', remaingTime:state.questions.length * SEC_PER_QUESTION}
            case 'nextQuestion':
              return {...state, index:state.index+1, answer:null}
              case 'finished':
                return {...state, status:'finished', highscore:state.points >
                   state.highscore?state.points:state.highscore}
                 

                case 'retake':
                  return {...initailState, status:'ready', questions:state.questions, mode:state.mode}
                  case 'back':
                    return {...initailState, }
  

                  case 'tick':
                    return {...state,  remaingTime:state.remaingTime-1,
                       status:state.remaingTime===0 ?'finished':state.status}
  
            case 'newAnswer':
              // eslint-disable-next-line no-case-declarations
              const question =state.questions.at(state.index)
              return {...state, answer:action.payload,
             points: action.payload === question.correctOption? state.points+ question.points: state.points
              }
  

      default:
        throw new Error('Unknown action ')
  
     }


  }
function App() {

  const [state,dispatch,]= useReducer(reducer , initailState)
  const {status, questions,index,answer,points, highscore,remaingTime,mode} =state
  const sum = questions.reduce((accumulator, currentValue) => accumulator + currentValue.points, 0);
  const numbQuest = questions.length
  useEffect(function(){
if(mode){
   fetch(`http://localhost:3001/${mode}`).then((res)=>res.json())
    // eslint-disable-next-line no-unused-vars
    .then((data)=>dispatch({type:'dataReceived',payload:data.sort(() => Math.random() - 0.5)}))
    .catch((err)=>dispatch({type:'dataFailed'}))}
  },[mode])

  return (
    <>
      <div className='app'>
        <Header/>
        <MainPage>
            
          {status ==='loading' &&  <> 
          
          <Loader/>
          <Mode dispatch={dispatch} />
            </>}
          {status ==='error' && <Error/>}
          {status ==='ready' && <>
             <StartScreen numbQuest={numbQuest} dispatch={dispatch} mode={mode}/>
          </> }


          {status ==='active' && <>
          <Progress points={points} index={index} numQuestion={numbQuest} sum={sum} answr={answer}/>
            <Questions  questions={questions[index]} dispatch={dispatch} answer={answer} />
            <Footer>
              <Timer dispatch={dispatch} remaingTime={remaingTime} />
            </Footer>
            <NextButton dispatch={dispatch} answer={answer} index={index} numQuestion={numbQuest}/>

          </> }

              {
                status ==='finished' &&<FinishScreen sum={sum} score={points} dispatch={dispatch} highscore={highscore}/>
              }
           </MainPage>
      </div>
     
    </>
  )
}

export default App
