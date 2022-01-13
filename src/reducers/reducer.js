import { combineReducers } from "redux";
import employeeReducer from "./employee-reducers";

const rootReducer = combineReducers({
    employeeState: employeeReducer
});

export default rootReducer;

