import {combineReducers} from 'redux'
import userListSlice from './userListSlice'
import { reducer as formReducer } from 'redux-form'
import  factsListSlice  from './factsSlice'

export const rootReducer = combineReducers({
    userListSelector: userListSlice,
    form: formReducer,
    factsListSelector: factsListSlice
})