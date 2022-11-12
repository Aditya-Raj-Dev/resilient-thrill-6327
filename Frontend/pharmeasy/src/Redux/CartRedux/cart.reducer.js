import  * as types from "./cart.action.Types"

const initialstate={
    data:[],
    msg:"",
    isLoading:false,
    isError:false,
}

export const cartreducer=(oldstate=initialstate,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_CART_REQUEST:{
            return{
                ...oldstate,
                isLoading:false
            }
        }
        case types.GET_CART_SUCESS:{
            return {
                ...oldstate,
                isLoading:false,
                data:payload
            }
        }
        case types.GET_CART_FAILURE:{
            return{
                ...oldstate,
                isLoading:false,
                isError:true
            }
        }
        case types.POST_CART_REQUEST:{
            return{
                ...oldstate,
                isLoading:false
            }
        }
        case types.POST_CART_SUCESS:{
            return {
                ...oldstate,
                isLoading:false,
                msg:payload
            }
        }
        case types.POST_CART_FAILURE:{
            return{
                ...oldstate,
                isLoading:false,
                isError:true
            }
        }
        default:{
            return oldstate
        }
    }
}