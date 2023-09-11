import { toast } from "react-hot-toast";
import api from "../http";

export default class UserService {

    
    static async deleteUser(isAdmin : boolean , id : string) {
        if(isAdmin){
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