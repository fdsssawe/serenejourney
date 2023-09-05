"use client"

import login_validate from "@/lib/validate";
import { useFormik } from "formik";
import { useStore } from "@/store";

const Login = () => {

    const {login} = useStore()

    const formik = useFormik({
        initialValues: {
            email :'',
            password:''
        },
        validate: login_validate,
        onSubmit,
    })

    async function onSubmit(values: {email : string , password : string}) {
      login(values)
    }

    return ( 
        <div className="flex justify-center items-center h-full bg-slate-600">
    <form onSubmit={formik.handleSubmit} className="flex flex-col w-3/12">
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        {...formik.getFieldProps('email')}
      />
      {formik.errors.email && formik.touched.email ? <span className="text-red-500">{formik.errors.email}</span> : null}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="text"
        {...formik.getFieldProps('password')}
      /> 
      {formik.errors.password && formik.touched.password ? <span className="text-red-500">{formik.errors.password}</span> : null}

      <button type="submit">Submit</button>
    </form>
        </div>
     );
}
 
export default Login;