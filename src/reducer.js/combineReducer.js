import {combineReducers} from "redux"; 
import passReducer from "./reducer";

const rootReducers = combineReducers({
   user: passReducer,
})

export default rootReducers;
 
