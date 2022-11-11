import axios from "axios";
import * as types from "./cart.action.Types"

export const GetAllcart=()=>async (dispatch)=>{
    dispatch({type:types.GET_CART_REQUEST})
    return axios.get("http://localhost:8080/cart")
    .then((r)=>{
        dispatch({type:types.GET_CART_SUCESS,payload:r.data.data})
    })
    .catch((e)=>{
        dispatch({type:types.GET_CART_FAILURE})
    })
}

export const Postallcart=()=>async (dispatch)=>{
  dispatch({type:types.POST_CART_REQUEST})
  const data={
    
  }
  return axios.post("http://localhost:8080/cart",data)
  .then((r)=>{
    dispatch({type:types.POST_CART_SUCESS,payload:r.data})
     dispatch(GetAllcart())
  })
  .catch((r)=>{
    dispatch({type:types.POST_CART_FAILURE})
  })
}

export const Deletecart=()=>async (dispatch)=>{
    dispatch({type:types.DELETE_CART_REQUEST})
    const data={
      
    }
    return axios.post("http://localhost:8080/cart",data)
    .then((r)=>{
      dispatch({type:types.DELETE_CART_SUCESS,payload:r.data})
       dispatch(GetAllcart())
    })
    .catch((r)=>{
      dispatch({type:types.DELETE_CART_FAILURE})
    })
  }