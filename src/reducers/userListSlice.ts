import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IUser, IUserListState} from '../helper'

const STORAGE_KEY = 'userList'

const initialState: IUserListState = {
    userList: []
}

export const userListSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {
        getUserList(state) {
            const LS = localStorage.getItem(STORAGE_KEY)
            state.userList = LS ?
                JSON.parse(LS)
                : []
        },
        addToList(state, action: PayloadAction<IUser>) {
            const LS = localStorage.getItem(STORAGE_KEY)
            const res: IUser[] = LS ? JSON.parse(LS) : []
            res.push(action.payload)
            state.userList = res
            localStorage.setItem(STORAGE_KEY, JSON.stringify(res))
        }
    }
})
export const {getUserList, addToList} = userListSlice.actions
export const userListSelector = (state: { userListSelector: IUserListState } ) => state.userListSelector
export default userListSlice.reducer