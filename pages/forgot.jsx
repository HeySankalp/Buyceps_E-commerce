import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
  return (
   
      <div className=" pb-16 pt-10 bg-gradient-to-r from-gray-500 to-gray-900 flex    ">
        <div className="p-10  mx-auto md:w-full md:max-w-md">
          <div className='mx-auto text-center'>
          <Image className='rounded-full' src={'/logo.jpg'} height={80} width={80}></Image>
          <h5 className='my-5 text-xl text-white'>Reset password</h5>
          
          </div>
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600  block">E-mail</label>
              <input type="text" className="border rounded-lg px-3 py-1 mt-1 mb-5 text-sm w-full" />
              <button type="button" className="transition duration-200 bg-gray-600 hover:bg-gray-800  focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span className="inline-block mr-2">Continue</span>
              </button>
            <h5 className=' my-3'><Link href={'/login'} ><a className='text-pink-500 font-semibold'>Login</a></Link> to the account</h5>
            </div>
          </div>

        </div>
      </div>
  )
}

export default Login