
export default function login_validate(values : {email : string , password : string}): object{
    const errors : any = {}

    //email validation
    if(!values.email){
        errors.email = "Required"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    //password validation
    if(!values.password){
        errors.password = "Required"
    }else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = 'Must be from 8 to 20 characters long';
    }else if(values.password.includes(" ")){
        errors.password = 'Invalid Password';
    }

    return errors
}

export function register_validate(values : {name : string , surname : string , email : string , password : string, cpassword : string}): object{
    const errors : any = {}

    //name validatio
    if(!values.name){
      errors.name = "Required"
    }else if(values.name.includes(" ")){
        errors.name = 'Invalid Name';
    }

    //surname validatio
    if(!values.surname){
        errors.surname = "Required"
    }else if(values.surname.includes(" ")){
        errors.surname = 'Invalid Surname';
    }

    //email validation
    if(!values.email){
        errors.email = "Required"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    //password validation
    if(!values.password){
        errors.password = "Required"
    }else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = 'Must be from 8 to 20 characters long';
    }else if(values.password.includes(" ")){
        errors.password = 'Invalid Password';
    }

    //cpassword validation
    if(!values.password){
        errors.cpassword = "Required"
    }else if (values.cpassword !== values.password){
        errors.cpassword = "Password is not cofirmed"
    }

    return errors
}

export function PC_validate(values : {password : string}): object{
    const errors : any = {}
    
    if(!values.password){
        errors.password = "Required"
    }else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = 'Must be from 8 to 20 characters long';
    }else if(values.password.includes(" ")){
        errors.password = 'Invalid Password';
    }

    return errors
}