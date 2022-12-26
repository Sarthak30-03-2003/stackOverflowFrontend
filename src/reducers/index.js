import authReducer from "./auth.js";
import currentUserReducer from "./currentUser.js";
import questionsReducer from "./askQuestion.js";
import { combineReducers } from "redux";

export default combineReducers({
    authReducer,
    currentUserReducer,
    questionsReducer
})