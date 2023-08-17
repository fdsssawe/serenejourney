"use client"

import {useSession , signIn , signOut} from "next-auth/react"

const Navbar = () => {
    const session = useSession()
    return ( 
        <div className="flex justify-around">
            {session?.data ? <a href="/profile">Hello {session.data.user?.name}</a> : <div>You are unauthorized</div>}
            {session?.data ? <div onClick={() => signOut({callbackUrl: "/"})}>Sign Out</div> : <a href="/api/auth/signin">Sign In</a>}
        </div>
     );
}
 
export default Navbar;