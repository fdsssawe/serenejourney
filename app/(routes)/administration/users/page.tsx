"use client"

import UsersList from "./components/users-list";
import api from "@/http";
import { useEffect, useState } from "react";
import { useModalUCProvider } from "@/hooks/modal-uc-provider";
import Modal from "./components/modal";


interface users {
    _id: string;
    name: string | null;
    surname: string | null;
    email: string ;
    isAdmin: boolean ;
    }

const Users = () => {

    const [isMounted, setIsMounted] = useState(false);
    const openModal = useModalUCProvider((state)=>state.openModal)
    
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
        <Modal/>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full  border-b-gray-400 border-b-[3px] mb-10 rounded-sm ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Users panel</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here you can manipulate with users accounts , resset their passwords, ban users, check their packages , etc.</p>
            <div className="pb-20 relative mb-2">
                <div className="absolute right-0 bottom-0">
                    <button className="bg-indigo-500 py-1 px-2 rounded-lg text-white mr-2 w-[5.3rem]">
                        Refresh
                    </button>
                    <button className="bg-indigo-500 py-1 px-2 rounded-lg text-white w-[5.3rem]" onClick={()=>openModal()}>
                        Add user
                    </button>
                </div>
            </div>
            </div>
            {users.length > 1 || users[0]._id != "1" ? <UsersList users={users}/> : <div className="w-full text-center">Loading ...</div>}

        </div>
        </section>
     ); 
}
 
export default Users;