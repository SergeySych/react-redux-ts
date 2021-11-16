import {combineReducers} from 'redux'
import userListSlice from './userListSlice'

export const rootReducer = combineReducers({
    userListSelector: userListSlice
})