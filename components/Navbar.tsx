"use client"


import { useRouter } from "next/navigation"
import {ArrowRightSquare} from "lucide-react"

const Navbar = () => {

    const router = useRouter()
    return ( 
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a className="mr-5 hover:text-gray-900" href="/users">Users panel</a>
            <a className="mr-5 hover:text-gray-900">Travel packages</a>
            <a className="mr-5 hover:text-gray-900">Hotels panel</a>
            <a className="hover:text-gray-900">Products panel</a>
            </nav>
            <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round"  strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">SereneJourney Tours</span>
            </a>
            <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            </div>
        </div>
        </header>
     );
}
 
export default Navbar;