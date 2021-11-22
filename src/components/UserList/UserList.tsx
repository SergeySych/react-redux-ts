import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUserList, userListSelector} from '../../reducers/userListSlice'
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
                        userList.userList.map((user, idx) => (
                            <li key={idx}>
                                <p>{`${user.firstName} ${user.lastName}  ${user.email} ${user.birthYear}`}</p>
                            </li>
                        ))
                    }
                </ul>
                :
                userList.fetching ? <div>Loading...</div>
                    :
                    <div>Add user</div>
            }
        </div>

    )
}
export default UserList