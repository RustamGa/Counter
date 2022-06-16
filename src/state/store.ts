import {applyMiddleware, combineReducers} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk from "redux-thunk";
import { legacy_createStore as createStore} from 'redux'
const rootReducer = combineReducers({
    counter: counterReducer,
})
export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store;