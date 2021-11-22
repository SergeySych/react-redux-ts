export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    birthYear: number
    id?: number
}

export interface IUserForm {
    firstName: string,
    lastName: string
}

export interface IUserListState {
    userList: IUser[] | []
    fetching: boolean
    rejected: boolean
}