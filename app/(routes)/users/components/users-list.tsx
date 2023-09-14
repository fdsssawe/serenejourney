"use client"

import { MoreHorizontal } from "lucide-react";
import {Menu , Transition} from "@headlessui/react"
import { Fragment , useRef , useEffect, useState} from "react";
import UserService from "@/services/UserService";
import { useStore } from "@/store";



interface UsersListProps{
    users : [{
            _id: string;
            name: string | null;
            surname: string | null;
            email: string | null;
            isAdmin: boolean | null;
            }]
}

const UsersList : React.FC<UsersListProps> = ({users}) => {

    const user = useStore((state)=>state.user)



    return ( 
        <div className="flex flex-wrap -m-2">
        {users ?
            users.map((specificUser)=>(
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={specificUser?._id}>
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <svg width="70" height="70" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <circle cx="44" cy="44" r="44" fill="#6366F1"/>
                <path d="M42.295 20.3638C36.2037 21.0105 30.9512 25.4405 29.2187 31.4114C27.5412 37.2309 29.6175 43.8759 34.265 47.5218C34.8425 47.9758 35.3237 48.3885 35.3237 48.4298C35.3375 48.4711 35.0075 48.6499 34.6225 48.8288C33.3437 49.4066 31.46 50.6173 30.14 51.6904C26.5512 54.5933 23.8975 58.6931 22.7425 63.1231C22.3987 64.4439 22 67.1267 22 68.1035V68.64H24.1725H26.345L26.5237 67.0304C26.95 62.8617 28.49 59.4636 31.2812 56.5469C36.2587 51.3327 43.6425 49.6817 50.4212 52.2682C55.275 54.1255 59.1387 58.2529 60.7612 63.3295C61.2012 64.6778 61.5862 66.934 61.6 68.0484V68.64H63.8H66V67.9109C66 66.8377 65.6287 64.4852 65.2437 63.0268C63.635 56.9871 59.2075 51.5803 53.735 48.9939C53.1437 48.7049 52.6762 48.4573 52.6762 48.416C52.6762 48.3747 53.0475 48.0721 53.515 47.7281C55.2612 46.4349 57.2137 43.8897 58.135 41.7435C62.1775 32.2231 55.9212 21.4782 45.6775 20.3638C44.1237 20.1987 43.8762 20.1987 42.295 20.3638ZM45.6225 24.7526C51.3562 25.6881 55.3162 30.5859 54.9587 36.3091C54.6562 41.0693 51.5487 44.9078 46.9287 46.2423C45.5125 46.655 42.625 46.6825 41.25 46.3111C35.035 44.5913 31.5975 38.2077 33.6187 32.0855C35.255 27.1327 40.5075 23.9271 45.6225 24.7526Z" fill="white"/>
                </svg>

                <div className="flex-grow">
                   <h2 className="text-gray-900 title-font font-medium">{specificUser?.name} {specificUser?.surname}</h2>
                   <p className="text-gray-500">{specificUser?.email}</p>
               </div>

               <Menu as="div" className="relative inline-block text-left">
                <div>
                <Menu.Button as={Fragment}>
                    <MoreHorizontal />
                </Menu.Button>
                </div>
                <Transition as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                >
                <Menu.Items className="w-fit absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="mx-1.5 py-1">
                    <Menu.Item>
                    {({ active }) => (
                        <div
                        className={`${active && "bg-gray-200 rounded-sm "} px-1.5`}
                        onClick={()=>UserService.deleteUser(user.isAdmin , specificUser )}
                        >
                        Delete account
                        </div>
                    )}
                    </Menu.Item>
                </div>
                <div className="mx-1.5 py-1 w-[9rem]">
                    <Menu.Item>
                    {({ active }) => (
                        <div
                        className={`${active && "bg-gray-200 rounded-sm"} px-1.5`}
                        >
                        Resset password
                        </div>
                    )}
                    </Menu.Item>
                </div>
                </Menu.Items>
                </Transition>
                </Menu>
               </div>
           </div>
            ))
        :
            <div>
            </div>
        }
        </div>
     );
}
 
export default UsersList;