import api from "../http";

export default class UserService {
    static fetchUsers() {
        return api.get('http://localhost:5000/users')
    }
}