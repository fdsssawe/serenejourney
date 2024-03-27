import {create} from "zustand"
import AuthService from "@/services/AuthService";
import axios from "axios";
import { API_URL } from "@/http";
import api from "@/http";

interface useStoreParams {
    isAuth: boolean;
    user: any;
    isLoading: boolean;
    blogs: {items: any[], status: string};
    tags: {items: string[], status: string};
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
    addUser: ({ name, surname, email, password, cpassword } : 
      {name : string,  surname : string, email : string , password : string, cpassword : string})
       => Promise<any>;
    checkAuth: () => Promise<any>;
    logout: () => Promise<any>;
    getBlogs: () => Promise<any>;
    getTags: () => Promise<any>;
    deleteBlog: (id: string) => Promise<any>;
  }

export const useStore = create<useStoreParams>((set) => ({
    isAuth: false,
    user: {},
    isLoading: false,
    blogs: {
      items: [],
      status: 'loading',
    },
    tags: {
      items: [],
      status: 'loading',
    },
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
    addUser: async ({ name, surname, email, password, cpassword } : {name : string,  surname : string, email : string , password : string, cpassword : string}) => {
      try{
          set({isLoading : true})
          const response = await AuthService.addUser(name, surname, email, password, cpassword);
          set({isLoading : false})
          return response.data.user;
          }
          catch(e : any){
            set({isLoading : false})
            throw new Error(e.response?.data?.message);
          }
  },
    checkAuth: async () => {
        try{
          console.log("fdfd")
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
    },
    getBlogs: async () => {
        try{
            set({blogs : {items : [], status : 'loading'}})
            const response = await api.get('/posts')
            set({blogs : {items : response.data, status : 'loaded'}})
        }
        catch(e : any){
            set({blogs : {items : [], status : 'error'}})
        }
    },
    getTags: async () => {
        try{
            set({tags : {items : [], status : 'loading'}})
            const response = await api.get('/tags')
            set({tags : {items : response.data, status : 'laoded'}})
        }
        catch(e : any){
            set({tags : {items : [], status : 'error'}})
        }
    },
    deleteBlog: async (id : string) => {
        try{
            await api.delete(`/posts/${id}`)
            set((state) => ({
                blogs: {
                  ...state.blogs,
                  items: state.blogs.items.filter((item) => item.id !== id),
                },
              }));
        }
        catch(e : any){
            console.log("Error deleting blog")
        }
    }
}))