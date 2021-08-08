import { combineReducers } from "redux";
import {AccountReducer, FetchReducer} from "./accountReducer";

export const reducers = combineReducers({
    account:AccountReducer,
    fetch:FetchReducer,
})

