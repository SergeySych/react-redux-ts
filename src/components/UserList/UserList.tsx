import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUserList, userListSelector} from '../../reducers/userListSlice'
import './UserList.sass'

const UserList = () => {
    const userList = useSelector(userListSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserList())
    }, [dispatch])

    return (
        <div className="UserList-container">
            {
                userList.userList.length > 0 ?
                <ul>
                    {
                        userList.userList.map(user => (
                            <li key={user.firstName}>
                                <p>{`${user.firstName} ${user.lastName}`}</p>
                            </li>
                        ))
                    }
                </ul>
                :
                <div>Add user</div>
            }
        </div>

    )
}
export default UserList