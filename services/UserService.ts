import api from "../http";

export default class UserService {
    static async fetchUsers(setUsers : any) {
        const users = await api.get('/users')
        setUsers(users.data)
    }
}