"use client"


import { useRouter } from "next/navigation"
import {LogOut , LogIn, Headphones, MapPin} from "lucide-react"
import { useStore } from "@/store"
import logo from "../logo.png"
import Logo from "./Logo"

const Navbar = () => {
    const states = useStore()
    const router = useRouter()
    return ( 
        <header className="text-gray-600 body-font mb-8">
        {/* <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a className="mr-5 hover:text-gray-900" href="/administration/users">Users panel</a>
            <a className="mr-5 hover:text-gray-900">Travel packages</a>
            <a className="mr-5 hover:text-gray-900">Hotels panel</a>
            <a className="hover:text-gray-900">Products panel</a>
            </nav>
            <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0" onClick={()=> router.push("/")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round"  strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl cursor-pointer" >SereneJourney Tours</span>
            </a>
            {states.isAuth ? 
            <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 gap-2 cursor-pointer items-center" onClick={()=> {
            states.logout() 
            router.push("/")
            }}>
                Log Out
                <LogOut size="21" />
            </div>
            :
            <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 gap-2 cursor-pointer items-center" onClick={() => router.push("/login")}>
                Sign In
                <LogIn size="21" />
            </div>
            }   
        </div> */}
            <div className="flex flex-col">
                <div className="flex">
                    <div className="w-[20%]  h-20 flex justify-center items-center">
                        <div className="h-0 w-full border-[1px] rounded-r-lg border-acc"></div>
                    </div>
                    <div className="w-[12%]  h-20 flex justify-center pt-5 cursor-pointer" onClick={()=>router.push("/")}>
                        <Logo/> 
                    </div>
                    <div className="w-[68%] flex justify-center">
                        <div className="h-1/2 w-full border-b-[2px] border-acc flex pl-[8%] justify-end">
                            <button className=" text-text lg:text-[1.05rem] font-normal border-l-[2px] border-acc px-2 inline-flex items-center"> <MapPin size="18" className="mr-1"/> Locations</button>
                            <button className=" text-text lg:text-[1.05rem] font-normal border-x-[2px] border-acc px-2 inline-flex items-center"> <Headphones size="18" className="mr-1"/> Care  </button>
                            {states.isAuth ? 
                            <div className=" text-text lg:text-[1.05rem] font-normal border-r-[2px] border-acc px-2 inline-flex items-center mr-[35%]" onClick={()=> {
                            states.logout() 
                            router.push("/")
                            }}>
                                Log Out <LogOut size="18" className="ml-2"/>
                            </div>
                            :
                            <div className=" text-text lg:text-[1.05rem] font-normal border-r-[2px] border-acc px-2 inline-flex items-center mr-[35%]" onClick={() => router.push("/login")}>
                                Sign In
                                <LogIn size="18" />
                            </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse">
                    <div className="w-[40%] justify-between flex mr-[22%]">
                        <button className=" text-text lg:text-base font-[600] " onClick={()=>router.push("/administration/users")}>User list</button>
                        <button className=" text-text lg:text-base font-[600]">Hotels</button>
                        <button className=" text-text lg:text-base font-[600]">Packages</button>
                        <button className=" text-text lg:text-base font-[600]">Flights</button>
                        <button className=" text-text lg:text-base font-[600]">Cruise</button>
                        <button className=" text-text lg:text-base font-[600]">Blogs</button>
                        <button className=" text-text lg:text-base font-[600]">Blogs</button>
                        <button className=" text-text lg:text-base font-[600]">Blogs</button>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Navbar;