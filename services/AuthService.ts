import api from "../http";

export default class AuthService{
    static async login(email : string , password : string){
        return api.post('/login', {email, password})
    }   

    static async registration( name : string,  surname : string, email : string , password : string, cpassword : string){
        return api.post('/registration', {name, surname, email, password, cpassword})
    }  

    static async addUser( name : string,  surname : string, email : string , password : string, cpassword : string){
        return api.post('/addUser', {name, surname, email, password, cpassword})
    }  

    static async logout(){
        return api.post('/logout')
    }  

    static async googleAuthHandle(email : string , password : string){

        const isUser = await api.post('/isuser', {email})


        if(isUser.data){
            return {
                response : await api.post('/login', {email, password}),
                job : "login"
            }
        }
        else{
            return {
                response : await api.post('/registration', {email, password}),
                job : "registration"
            }
        }
    }
}

