/* eslint-disable react/prop-types */

const NextButton = ({dispatch, answer ,numQuestion,index}) => {
    const hasAnswered = answer !==null

   if(index < numQuestion-1) return (
        <div>


            { hasAnswered ?  <button className="btn btn-ui" onClick={()=>dispatch({type:'nextQuestion',answer:null})}>
                Next
            </button>  :''}
           
        </div>
    )

    
   if(index === numQuestion-1) return (
    <div>


        { hasAnswered ?  <button className="btn btn-ui" onClick={()=>dispatch({type:'finished'})}>
            Finished
        </button>  :''}
       
    </div>
)
}

export default NextButton
