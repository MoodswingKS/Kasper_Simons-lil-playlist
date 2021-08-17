import { combineReducers } from "redux"
import itemReducer from "./playlist/item-reducer"


const rootReducer = combineReducers({
    playlist: itemReducer
})

export default rootReducer