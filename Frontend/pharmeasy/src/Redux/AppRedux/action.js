import * as types from "./actionTypes"
import axios from "axios"

export const getService =(params) =>(dispatch)=>{
    dispatch({type : types.GET_MEDICINE_REQUEST})
    return axios.get("URL", params)
    
    .then((res)=>{
        dispatch({type : types.GET_MEDICINE_SUCCESS, payload:res.data})
        
    })
    .catch((err)=>{
        dispatch({type : types.GET_MEDICINE_FAILURE, payload:err})
    })
}