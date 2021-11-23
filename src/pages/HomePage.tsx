import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import  Form  from '../components/form/UserForm'
import UserList from '../components/UserList/UserList'
import { IUser } from '../helper'
import { postUser } from '../reducers/userListSlice'

const HomePage = () => {
    
    const dispatch = useDispatch()

    const addUser = (user: IUser) => {
        dispatch(postUser(user))
    }

    return (
        <div>
            <Link to="/facts">To facts</Link>
            <Form
                onSubmit={addUser}/>
            <UserList/>
        </div>
    )
}

export default connect(null)(HomePage)