import { combineReducers } from "redux"
import addItemReducer from './addItemReducer'
import listReducer from './listReducer'

const allReducer = combineReducers({
    item: addItemReducer,
    list: listReducer
})

export default allReducer