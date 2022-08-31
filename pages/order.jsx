import React from 'react'
import Image from 'next/image'

const Order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Buyceps</h2>
              <h1 className="text-pink-400 md:text-3xl text-xl title-font font-medium mb-4">Order id #00192928</h1>
              <div className="flex mb-4 justify-between">
                <a className="   py-2 text-lg px-2">Item</a>
                <a className="  py-2 text-lg px-2">Quantity</a>
                <a className="  py-2 text-lg px-2">Price</a>
              </div>
              <div className="flex border-t justify-between border-gray-200 py-2">
                <div className='w-32'>
                  <div className="text-gray-500">latpulldown</div>
                </div>
                <div className=" text-gray-900 mr-10">2</div>
                <div className=" text-gray-900">₹999</div>
              </div>
              <div className="flex border-t justify-between border-gray-200 py-2">
                <div className='w-32'>
                  <div className="text-gray-500">band</div>
                </div>
                <div className=" text-gray-900 mr-10">3</div>
                <div className=" text-gray-900">₹399</div>
              </div>
              <div className="flex border-t justify-between border-gray-200 py-2">
                <div className='w-32'>
                  <div className="text-gray-500">Quantity</div>
                </div>
                <div className=" text-gray-900 mr-10">4</div>
                <div className="text-gray-900">₹499</div>
              </div>
              <div className="flex mt-10">
                <span className="title-font font-medium text-2xl text-gray-900">₹1399</span>
                <button className="flex ml-auto text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded">Track order</button>
              </div>
            </div>
            <div className='lg:w-1/2 w-full lg:h-auto h-64'>
            <Image alt="ecommerce" width={1000} height={1000} className=" object-cover object-center rounded" src="https://dummyimage.com/400x400" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Order