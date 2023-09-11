"use client"

import UsersList from "./components/users-list";
import api from "@/http";
import { useEffect, useState } from "react";
import { useStore } from "@/store";

interface users {
    _id: string;
    name: string | null;
    surname: string | null;
    email: string ;
    isAdmin: boolean ;
    }

const Users = () => {

    const {checkAuth} = useStore()
    const [isMounted, setIsMounted] = useState(false);
    
    const [users , setUsers] = useState<[users]>([{
        _id: "1",
        name:null,
        surname: null,
        email:"fgd",
        isAdmin:false,
        }])

    const fetchUsers = async (setUsers : any) => {
        const users = await api.get('/users')
        setUsers(users.data)
    }

    useEffect(()=>{
        if(localStorage.getItem('token')){
            checkAuth()
          }
        fetchUsers(setUsers)
        setIsMounted(true);
    },[])

    if (!isMounted) {
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Users panel</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here you can manipulate with users accounts , resset their passwords, ban users, check their packages , etc.</p>
            </div>

        </div>
        </section>
      }

    return ( 
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Users panel</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here you can manipulate with users accounts , resset their passwords, ban users, check their packages , etc.</p>
            </div>
            {users.length > 1 || users[0]._id != "1" ? <UsersList users={users}/> : <div className="w-full text-center">Loading ...</div>}

        </div>
        </section>
     ); 
}
 
export default Users;