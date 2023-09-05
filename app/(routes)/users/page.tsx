
import { MoreHorizontal } from "lucide-react";
import UsersList from "./components/users-list";
import UserService from "@/services/UserService";


const Users = async () => {

    const users = await UserService.fetchUsers()
    console.log(users)
    return ( 
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Users panel</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here you can manipulate with users accounts , resset their passwords, ban users, check their packages , etc.</p>
            </div>
            {/* <UsersList users={users}/> */}

        </div>
        </section>
     ); 
}
 
export default Users;