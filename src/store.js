import { createStore, applyMiddleware } from "redux";
import reducers from "./reducer.js/combineReducer";
import thunk from "redux-thunk";

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  applyMiddleware(thunk)  
    
export default store;