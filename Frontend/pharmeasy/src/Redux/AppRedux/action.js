import * as types from "./actionTypes"
import axios from "axios"

export const getService =(payload) =>(dispatch)=>{
    dispatch({type : types.GET_MEDICINE_REQUEST})
    return axios.get(`https://easy-ruby-peacock-hose.cyclic.app/api/products`, payload)
    
    .then((res)=>{
        dispatch({type : types.GET_MEDICINE_SUCCESS, payload:res.data})
        
    })
    
    .catch((err)=>{
        dispatch({type : types.GET_MEDICINE_FAILURE, payload:err})
    })
}