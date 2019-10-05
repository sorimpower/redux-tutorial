import {combineReducers} from "redux";
import productReducer from "./product";
import userReducer from "./user";

const allReducers = combineReducers({
	products : productReducer,
	user: userReducer
});

export default allReducers;