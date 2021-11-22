import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import {IUser, IUserListState} from '../helper'
import {getUserListFetch, postUserFetch} from '../api/index'

const initialState: IUserListState = {
    userList: [],
    fetching: false,
    rejected: false
}

export const getUserList = createAsyncThunk(
    'userListSlice/getUserList',
    () => getUserListFetch()
)

export const postUser = createAsyncThunk(
    'userListSlice/postUser',
    (user: IUser) => postUserFetch(user)
)

export const userListSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserList.pending, (state) => {
            state.userList = []
            state.fetching = true
            state.rejected = false
        })
        builder.addCase(getUserList.fulfilled, (state, action: PayloadAction<IUser[]>) => {            
            state.userList = action.payload
            state.fetching = false
            state.rejected = false
        })
        builder.addCase(getUserList.rejected, (state) => {
            state.userList = []
            state.fetching = false
            state.rejected = true
        })
        builder.addCase(postUser.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.userList = [...state.userList, action.payload]
            state.fetching = false
            state.rejected = false
        })
    }
})

export const userListSelector = (state: { userListSelector: IUserListState } ) => state.userListSelector
export default userListSlice.reducer