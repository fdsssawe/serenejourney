import { toast } from "react-hot-toast";
import api from "../http";

export default class UserService {

    
    static async deleteUser(isAdmin : boolean , user : {
        _id: string;
        name: string | null;
        surname: string | null;
        email: string | null;
        isAdmin: boolean | null;
        }) {
        if(isAdmin){
            const id = user._id
            await api.post("/deleteuser",{id})
            toast.success("User deleted")
            return true
        }
        else{
            console.log("No access")
            return false
        }
    }

    static async SetPasswordManually(id: string, password: string) {
            await api.post("/changePassword",{id, password})
            toast.success("Password changed successfully")
            return true
    }

    static async UpdateProfile(id: string, name: string, surname: string) {
        await api.post("/update-profile",{id, name, surname})
        toast.success("Profile updated successfully")
        return true
}
}