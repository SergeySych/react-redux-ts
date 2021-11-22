import { IUser } from "../helper"

const SERVER_ROUTE = 'http://localhost:5000'
const GET_USERS_ROUTE = SERVER_ROUTE + '/users'
const POST_USERS_ROUTE = SERVER_ROUTE + '/users'

export const getUserListFetch = () => {
    return fetch(GET_USERS_ROUTE, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "GET",
    })
    .then(data => data.json())
}

export const postUserFetch = (user: IUser) => {
    return fetch(POST_USERS_ROUTE, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(user)
    })
    .then(data => data.json())  
}
