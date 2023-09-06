"use client"

import { MoreHorizontal } from "lucide-react";
import UsersList from "./components/users-list";
import UserService from "@/services/UserService";
import { useStore } from "@/store";
import { useEffect, useState} from "react";

const Users = () => {
    
    const {setUsers, users} = useStore()

    useEffect(()=>{
        UserService.fetchUsers(setUsers)
        
    },[])



    return ( 
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Users panel</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here you can manipulate with users accounts , resset their passwords, ban users, check their packages , etc.</p>
            </div>
            {users.length > 0 ? <UsersList users={users}/> : <div className="w-full text-center">Loading ...</div>}

        </div>
        </section>
     ); 
}
 
export default Users;