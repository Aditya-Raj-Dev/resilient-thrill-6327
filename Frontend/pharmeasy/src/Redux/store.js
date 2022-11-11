import { reducer as AppRedux } from "../Redux/AppRedux/reducer";
import { reducer as AuthRedux } from "../Redux/AuthRedux/reducer";
import { cartreducer } from "./CartRedux/cart.reducer";
import thunk from "redux-thunk";
import { combineReducers, applyMiddleware, legacy_createStore } from "redux";

const rootReducer = combineReducers({ AppRedux, AuthRedux,cartreducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
