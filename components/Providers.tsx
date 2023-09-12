"use client"


import { Toaster } from "react-hot-toast";


const Providers = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return ( 
        <div>
        <Toaster/>
        {children}
        </div>
     );
}
 
export default Providers;