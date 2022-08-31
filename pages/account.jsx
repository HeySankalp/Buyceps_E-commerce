import { React, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaRegUserCircle } from 'react-icons/fa'

const Account = () => {

  const router = useRouter();
  const [user, setuser] = useState("")


  useEffect(() => {
    if (!localStorage.getItem('userToken')) {
      router.push('/')
    };
    if (localStorage.getItem('userName')) {
      setuser(localStorage.getItem('userName'))
    }
  },[])

  return (
    <div className='md:w-3/4 min-h-[90vh] bg-gradient-to-r from-gray-500 to-gray-900 mx-auto'>

      <h1 className='text-2xl text-center font-bold text-white py-5 md:py-10 '> Your account</h1>
      <FaRegUserCircle className='text-white md:text-8xl text-6xl mx-auto ' />

{/* to implement the user profile edit */}
      {/* <div className='mx-2 p-4 md:p-10 md:w-3/6 md:mx-auto bg-white rounded my-2 md:my-7'>
        <label className="font-semibold text-sm text-gray-600  block">Enter a name</label>
        <input type="text" className="border rounded-lg px-3 py-1 mt-1 mb-5 text-sm w-full" />
        <label className="font-semibold text-sm text-gray-600  block">current Password</label>
        <input type="password" className="border rounded-lg px-3 py-1 mt-1 mb-5 text-sm w-full" />
        <label className="font-semibold text-sm text-gray-600  block">new Password</label>
        <input type="password" className="border rounded-lg px-3 py-1 mt-1 mb-5 text-sm w-full" />
        <label className="font-semibold text-sm text-gray-600  block">confirm new Password</label>
        <input type="password" className="border rounded-lg px-3 py-1 mt-1 mb-5 text-sm w-full" />
      </div> */}

      <div className='flex flex-col items-center justify-center py-20 text-base md:text-2xl'>
        <div className='flex md:w-96 my-2'>
          <div className='text-white md:w-32 font-bold px-2'>Name:</div>
          <div className='text-white'>{user}</div>
        </div>
        <div className='flex md:w-96 my-2'>
          <div className='text-white md:w-32 font-bold px-2'>Password: </div>
          <div className='text-white'>**********</div>
        </div>
        <div className='flex md:w-96 my-2'>
          <div className='text-white md:w-32 font-bold px-2'>Orders: </div>
          <div className='text-white'>check your orders</div>
        </div>
      </div>

    </div>
  )
}

export default Account