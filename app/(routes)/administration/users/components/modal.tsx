"use client";

import { useModalUCProvider } from '@/hooks/modal-uc-provider';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useFormik } from "formik";
import { useStore } from "@/store";
import { register_validate } from '@/lib/validate';

export default function Modal() {


    const {isOpen , closeModal } = useModalUCProvider()
    const {addUser , user} = useStore()

    const formik = useFormik({
      initialValues: {
          name:'',
          surname:'',
          email :'',
          password:'',
          cpassword:'',
      },
      validate: register_validate,
      onSubmit,
  })


  async function onSubmit(values: {name : string,  surname : string, email : string , password : string, cpassword : string}) {
    addUser(values)
  }

  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="bg-white rounded-lg shadow relative ">
                <div className="flex justify-end p-2">
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-indigo-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  hover:text-white" onClick={closeModal}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>
                <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#" onSubmit={formik.handleSubmit}>
                    <h3 className="text-xl font-medium text-gray-900 ">Create new user</h3>
                    <div>
                        <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2 ">User name</label>
                        <input type="name" {...formik.getFieldProps('name')} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="John" />
                        {formik.errors.name && formik.touched.name ? <span className="text-red-500 text-sm">{formik.errors.name}</span> : null}
                    </div>
                    <div>
                        <label htmlFor="surname" className="text-sm font-medium text-gray-900 block mb-2 ">User surname</label>
                        <input type="surname" {...formik.getFieldProps('surname')} name="surname" id="surname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="Doe" />
                        {formik.errors.surname && formik.touched.surname ? <span className="text-red-500 text-sm">{formik.errors.surname}</span> : null}
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 ">User email</label>
                        <input type="email" {...formik.getFieldProps('email')} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="sj@company.com" />
                        {formik.errors.email && formik.touched.email ? <span className="text-red-500 text-sm">{formik.errors.email}</span> : null}
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 ">User password</label>
                        <input type="password" {...formik.getFieldProps('password')} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" />
                        {formik.errors.password && formik.touched.password ? <span className="text-red-500">{formik.errors.password}</span> : null}
                    </div>
                    <div>
                        <label htmlFor="cpassword" className="text-sm font-medium text-gray-900 block mb-2 ">User cpassword</label>
                        <input type="cpassword" {...formik.getFieldProps('cpassword')} name="cpassword" id="cpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" />
                        {formik.errors.cpassword && formik.touched.cpassword ? <span className="text-red-500">{formik.errors.cpassword}</span> : null}
                    </div>
                    <button type="submit" className="w-full text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-200">Add user</button>
                </form>
            </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
