import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import {IFact, IFactsList} from '../helper'
import {getFactsListFetch} from '../api/index'

const initialState: IFactsList = {
    factsList: [],
    fetching: false,
    rejected: false

}

export const getFactsList = createAsyncThunk(
    'factsListSlice/getFactsList',
    () => getFactsListFetch()
)


export const factsListSlice = createSlice({
    name: 'factsList',
    initialState,
    reducers: {
        resetValue(state) {
            state = {
                factsList: [],
                fetching: false,
                rejected: false
            }
        } 
    },
    extraReducers: (builder) => {
        builder.addCase(getFactsList.pending, (state) => {
            state.factsList = []
            state.fetching = true
            state.rejected = false
        })
        builder.addCase(getFactsList.fulfilled, (state, action: PayloadAction<IFact[]>) => {            
            state.factsList = action.payload
            state.fetching = false
            state.rejected = false
        })
        builder.addCase(getFactsList.rejected, (state) => {
            state.fetching = false
            state.rejected = true
        })
    }
})
export const {resetValue} = factsListSlice.actions
export const factsListSelector = (state: { factsListSelector: IFactsList } ) => state.factsListSelector
export default factsListSlice.reducer