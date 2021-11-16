import React, {useState} from 'react'
import { IUser } from '../../helper'
import {useDispatch} from 'react-redux'
import { addToList } from '../../reducers/userListSlice'
import './Form.sass'

const Form = () => {
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState<IUser>( {
        firstName: '',
        lastName: ''
    })
    const handleOnChange = (target: HTMLInputElement) => {
        setInputs(prevState => ({
            ...prevState,
            [target.id]: target.value
        }))
    }
    const handleOnSubmit = () => {
        setInputs({
            firstName: '',
            lastName: ''
        })
        dispatch(addToList(inputs))
    }
    return (
        <div className="Form-container">
            <input type="text"
                   id="firstName"
                   placeholder="First name"
                   value={inputs.firstName}
                   onChange={event => handleOnChange(event.target)}/>
            <input type="text"
                   id="lastName"
                   placeholder="Last name"
                   value={inputs.lastName}
                   onChange={event => handleOnChange(event.target)}/>
            <button onClick={handleOnSubmit}>Submit</button>
        </div>

    )
}

export default Form