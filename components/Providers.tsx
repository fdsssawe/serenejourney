"use client"

import {SessionProvider} from "next-auth/react"
import { Toaster } from "react-hot-toast";


const Providers = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return ( 
        <SessionProvider>
        <Toaster/>
        {children}
        </SessionProvider>
     );
}
 
export default Providers;