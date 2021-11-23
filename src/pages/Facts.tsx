import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { factsListSelector, getFactsList, resetValue } from '../reducers/factsSlice'


const Facts = () => {
    const dispatch = useDispatch()
    const factsList = useSelector(factsListSelector)

    useEffect(() => {
        dispatch(getFactsList())

        return function() {
            dispatch(resetValue())
        }
    },[dispatch])
        
    return(
        <div>
                <Link to="/">To home</Link>
                {
                    factsList.fetching ?
                        <div>Loading</div>
                        : factsList.rejected ?
                            <div>Something went wrong</div>
                            :
                            <div>
                                {
                                    factsList.factsList.map((el, idx) => (
                                        <div key={el.fact+idx}>{el.fact}</div>
                                    ))
                                }
                            </div>
                }       
        </div>
    )
}

export default Facts