import { toast } from "react-hot-toast";
import api from "../http";

export default class UserService {

    static async fetchUsers(setUsers : any) {
        const users = await api.get('/users')
        setUsers(users.data)
    }
    
    static async deleteUser(isAdmin : boolean , id : string) {
        if(true){
            await api.post("/deleteuser",{id})
            toast.success("User deleted")
            return true
        }
        else{
            console.log("No access")
            return false
        }
    }
}