import {create} from "zustand"
import AuthService from "@/services/AuthService";
import axios from "axios";
import { API_URL } from "@/http";
import api from "@/http";

interface useStoreParams {
    isAuth: boolean;
    user: any;
    isLoading: boolean;
    login: ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => Promise<any>;
    registration: ({ name, surname, email, password, cpassword } : 
      {name : string,  surname : string, email : string , password : string, cpassword : string})
       => Promise<any>;
    checkAuth: () => Promise<any>;
    logout: () => Promise<any>;
  }

export const useStore = create<useStoreParams>((set) => ({
    isAuth: false,
    user: {},
    isLoading: false,
    login: async ({ email , password } : {email : string , password : string}) => {
        try{
            set({isLoading : true})
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            set({isAuth : true})
            set({user : response.data.user})
            set({isLoading : false})
            window.location.href = 'http://localhost:3000/' 
            return response.data.user;
            }
            catch(e : any){
              set({isLoading : false})
              throw new Error(e.response?.data?.message);
            }
    },
    registration: async ({ name, surname, email, password, cpassword } : {name : string,  surname : string, email : string , password : string, cpassword : string}) => {
      try{
          set({isLoading : true})
          const response = await AuthService.registration(name, surname, email, password, cpassword);
          localStorage.setItem('token', response.data.accessToken);
          set({isAuth : true})
          set({user : response.data.user})
          set({isLoading : false})
          window.location.href = 'http://localhost:3000/' 
          return response.data.user;
          }
          catch(e : any){
            set({isLoading : false})
            throw new Error(e.response?.data?.message);
          }
  },
    checkAuth: async () => {
        try{
            set({isLoading : true})
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
            localStorage.setItem('token', response.data.accessToken);
            set({user : response.data.user})
            set({isLoading : false})
            set({isAuth : true})
            return response.data.user;
        }
        catch(e : any){
            console.log("Error checking authorization")
        }
    },
    logout : async () => {
      await api.post('/logout')
      localStorage.removeItem('token');
      set({isAuth : false})
      set({user : {}})
    }
}))