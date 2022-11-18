import { useReducer, useState } from "react"


const inputStateReduser =(state,action)=>{
 
if(action.type==='INPUT'){
return {
    value:action.value,isTouched:state.isTouched
}
}

if(action.type==='BLUR'){
return{
    isTouched:true,value:state.value
}
}

if(action.type==='RESET'){
return {
    isTouched:false,value:''
}
}
return {
        value:'',
        isTouched:false
    }
 }

const initialInputState = {
 value:'',
 isTouched:false
}  

const useInput = (validateValue)=>{





const [inputState,dispatch]=useReducer(inputStateReduser,initialInputState)

 const  valueIsValid = validateValue(inputState.value)
 const hasError = !valueIsValid  && inputState.isTouched;

 const valueChangeHandler =(e)=>{
    dispatch({type:"INPUT",value:e.target.value})
  }

 const inputBlurHandlerHandler = ()=>{
    dispatch({type:"BLUR"})
 } 
 
 const reset =()=>{
dispatch({type:"RESET"})
 }

return {
    value:inputState.value,
    isValid:valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandlerHandler,
    reset

}

}

export default useInput