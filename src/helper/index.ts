export interface IUser {
    firstName: string,
    lastName: string
}

export interface IUserListState {
    userList: IUser[] | []
}