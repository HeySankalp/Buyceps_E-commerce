import React from 'react'
import { BsBagCheckFill } from 'react-icons/bs';
import { TbMoodEmpty } from 'react-icons/tb'

const Checkout = ({ cart, subTotal }) => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center text-gray-600 my-10 '>Checkout</h1>
      <div className="form md:mx-40  md:my-20">
        <h2 className='font-bold text-xl md:mx-10 my-10 mx-24'>1. Delivary details</h2>
        <div className='md:flex'>
          <div className='md:w-1/2 mx-10  my-2'>
            <label htmlFor="name" className="leading-7 text-sm text-gray-600"> Name</label>
            <input type="text" id="name" name="name" className=" w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className='md:w-1/2 mx-10  my-2'>
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="text" id="name" name="email" className=" w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="relative mx-10 my-2 ">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea id="message" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-24 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <div className='md:flex'>
          <div className='md:w-1/2 mx-10 my-2'>
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600"> PinCode</label>
            <input type="text" id="name" name="pincode" className=" w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className='md:w-1/2 mx-10 my-2'>
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="name" name="city" className=" w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='md:flex'>
          <div className='md:w-1/2 mx-10 my-2'>
            <label htmlFor="state" className="leading-7 text-sm text-gray-600"> State</label>
            <input type="text" id="name" name="state" className=" w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className='md:w-1/2 mx-10 my-2'>
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
            <input type="text" id="name" name="phone" className=" w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div>
          <h2 className='font-bold text-xl md:mx-10 my-10 mx-24'>2. Review cart item</h2>
          <div className=" z-10  text-white  mx-2 my-3 sidebar p-8 rounded-lg bg-gray-700 ">
            <div className="sidebartop">
              {Object.keys(cart).length !== 0 &&
                <div className='flex font-bold justify-between'>
                  <div className='mx-5'>Item</div>
                  <div className='mx-5'>Quantity</div>
                  <div className='mx-5'>price</div>
                </div>
              }

            </div>

            <ol className="cartcheckout list-decimal">
              {
                Object.keys(cart).length === 0 && <div className='flex'><div className='flex my-5 justify-center items-center mx-2'>Oops, no item in the cart !</div><TbMoodEmpty className='text-5xl my-5' /></div>
              }
              {Object.keys(cart).map((k) => {
                return <li key={k} className='my-5' >
                  <div className='flex justify-between'>
                    <div className='w-64'>
                      <div className=' break-words mx-3'>{cart[k].name}</div>
                    </div>
                    <div className='   md:mr-28 mr-16 '>{cart[k].qty}</div>
                    <div className='   mx-6'>₹{cart[k].qty * cart[k].price}</div>
                  </div>
                </li>
              })}
            </ol>
            <div className="btngrp flex">
              <button disabled={Object.keys(cart).length == 0 ? "true" : "false"} className="flex mx-2 my-2 text-white  bg-gray-600 border-0 py-2 px-2 focus:outline-none hover:bg-gray-800 rounded text-sm"><BsBagCheckFill className='my-auto mr-1' />{Object.keys(cart).length == 0 ? "Addsome" : `Pay ₹ ${subTotal}`}</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Checkout