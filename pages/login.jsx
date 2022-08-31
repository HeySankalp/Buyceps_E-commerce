import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from 'next/router';


const Login = ({user, setUser, setIsAdmin}) => {
  const router = useRouter();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let emailChange = (e) => { setEmail(e.target.value) }
  let passwordChange = (e) => { setPassword(e.target.value) }

  let handleSubmit = async () => {
    let data = { email, password };
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    let res = await response.json()
    if (res.status) {
      localStorage.setItem("userToken",res.userToken)
      localStorage.setItem("userName",res.username)
      setUser({value : res.userToken});
      toast.success("Loggedin succesfully")
      if(res.isAdmin){
        setIsAdmin(true);
        router.push('admin/dashboard')
      }else{
        router.push('/')
      }

    } else {
      toast.error("Wrong credentials")
    }

    setEmail("");
    setPassword("");

  }

  return (

    <div className="pb-16 pt-10 bg-gradient-to-r from-gray-500 to-gray-900 flex flex-col justify-center  ">
      <ToastContainer
        position="top-center"
        theme="dark"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className='mx-auto text-center'>
          <Image className='rounded-full' src={'/logo.jpg'} height={80} width={80} alt=""></Image>
          <h5 className='my-2 text-white'>Buyceps login</h5>
          <h5 className='text-white my-3'>Don&apos;t have an account? <Link href={'/signup'} ><a className='text-pink-400 font-semibold '>signup</a></Link></h5>
        </div>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">

            <label className="font-semibold text-sm text-gray-600  block">E-mail</label>
            <input value={email} onChange={emailChange} type="text" className="border rounded-lg px-3 py-1 mt-1 mb-5 text-sm w-full" />

            <label className="font-semibold text-sm text-gray-600  block">Password</label>
            <input value={password} onChange={passwordChange} type="password" className="border rounded-lg px-3 py-1 mt-1 mb-5 text-sm w-full" />

            <button onClick={handleSubmit} type="button" className="transition duration-200 bg-gray-600 hover:bg-gray-800  focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
              <span className="inline-block mr-2">Login</span>
            </button>
            <h5 className=' my-3'>Forgot your password? <Link href={'/forgot'} ><a className='text-pink-400 font-semibold '>forgot</a></Link></h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login