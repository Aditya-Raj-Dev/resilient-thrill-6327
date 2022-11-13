import * as types from "./actionTypes"
const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {
  const {type,payload} = action
  switch(type){
    default:
      return state
    case types.GET_MEDICINE_REQUEST:
      return{...state, isLoading:true, isError:false}
    case types.GET_MEDICINE_SUCCESS:
      return{...state,products:payload, isLoading:false, isError:false}
    case types.GET_MEDICINE_FAILURE:
      return{...state, products:[], isLoading:false, isError:true}    
  }
  
}
