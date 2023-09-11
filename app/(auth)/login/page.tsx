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
    //     <div className="rounded-lg p-8 flex-col w-full flex justify-center border-2">
    // <form onSubmit={formik.handleSubmit} className="flex flex-col w-3/12 border-2">
    //   <label htmlFor="email">Email Address</label>
    //   <input
    //     id="email"
    //     type="email"
    //     {...formik.getFieldProps('email')}
    //     className="border-1"
    //   />
    //   {formik.errors.email && formik.touched.email ? <span className="text-red-500">{formik.errors.email}</span> : null}
    //   <label htmlFor="password">Password</label>
    //   <input
    //     id="password"
    //     type="text"
    //     {...formik.getFieldProps('password')}
    //   /> 
    //   {formik.errors.password && formik.touched.password ? <span className="text-red-500">{formik.errors.password}</span> : null}

    //   <button type="submit">Submit</button>
    // </form>
    //     </div>
    <div className="flex lg:mt-32  flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" {...formik.getFieldProps('email')} type="email" className="px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          {formik.errors.email && formik.touched.email ? <span className="text-red-500 text-sm">{formik.errors.email}</span> : null}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" type="password" {...formik.getFieldProps('password')} className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          {formik.errors.password && formik.touched.password ? <span className="text-red-500">{formik.errors.password}</span> : null}
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Start a 14 day free trial</a>
    </p>
  </div>
</div>
     );
}
 
export default Login;