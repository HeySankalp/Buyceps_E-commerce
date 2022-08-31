import { React, useRef, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineShoppingCart, AiFillCloseCircle } from 'react-icons/ai'
import { FaPlusSquare, FaMinusSquare, FaRegUserCircle } from 'react-icons/fa'
import { BsBagCheckFill } from 'react-icons/bs'
import { TbMoodEmpty } from 'react-icons/tb'




const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal, increaseItem }) => {

  let ref = useRef();

  const [dropdown, setDropdown] = useState(false)

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }


  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-96')) {
      ref.current.classList.remove('translate-x-96')
      ref.current.classList.add('translate-x-0')
    } else {
      ref.current.classList.add('translate-x-96')
      ref.current.classList.remove('translate-x-0')
    }
  }

  return (
    <div className='py-1 mx-auto text-center bg-gray-900 text-slate-200 flex flex-col justify-center items-center md:flex-row md:justify-between'>
      <div className="logo flex items-center mx-3">
        <Image alt='' className='rounded-full' src="/logo.jpg" width={50} height={50} />
        <span className='mx-2 text-2xl '>Buyceps</span>
      </div>
      <div className="nav">
        <ul className='flex space-x-4 md:space-x-5 font-bold cursor-pointer items-center  md:justify-between '>
          <Link href={'/'}><a className='text-gray-300 hover:text-pink-400'><li >Home</li></a></Link>
          <Link href={'/orders'}><a className='text-gray-300 hover:text-pink-400'><li>Orders</li></a></Link>
          <Link href={'/contact'}><a className='text-gray-300 hover:text-pink-400'><li>Contact</li></a></Link>
          <Link href={'/about'}><a className='text-gray-300 hover:text-pink-400'><li>About</li></a></Link>
        </ul>
      </div>

      {!user.value && <div className='relative  flex text-3xl items-center mx-1'><AiOutlineShoppingCart className='hover:text-pink-400' onClick={toggleCart} />
        {
          Object.keys(cart).length !== 0 && <span className='w-2 h-2 absolute border-4 top-3 left-6 rounded-full border-red-600'></span>
        }
      <Link href={'/login'}><a><button className='rounded-md border-2 bg-gray-800 text-base text-white px-2 pb-1 my-2 mx-3 hover:bg-gray-700'>login</button></a></Link>
      </div>
      }

      {user.value && <div className=" flex md:relative md:top-0 cart absolute right-2 top-4 mx-2 md:mx-5 text-2xl md:text-3xl cursor-pointer items-center">
        <FaRegUserCircle onClick={toggleDropdown} className='mx-3 hover:text-pink-400 ' />
        {dropdown &&
          <div className='border-2 border-gray-900 absolute bg-gray-700 text-white top-9  text-start   md:right-10 right-3 rounded-md  z-10 text-base shadow-lg'>
            <ul>
              <Link href={'/account'}><a ><li className='px-3 pb-1 pt-2 hover:bg-gray-800'>Account</li></a></Link>
              <Link href={'/orders'}><a ><li className='px-3 pb-1 hover:bg-gray-800'>Orders</li></a></Link>
              <li onClick={logout} className='px-3 pb-2 hover:bg-gray-800'>Logout</li>
            </ul>
          </div>
        }
        <div className='relative hover:text-pink-400'><AiOutlineShoppingCart onClick={toggleCart} />
          {
            Object.keys(cart).length !== 0 && <span className='w-2 h-2 absolute border-4 top-1 right-0 rounded-full border-red-600'></span>
          }
        </div>
      </div>
      }

      {/* cart sidebar  */}
      <div ref={ref} className={`overflow-y-scroll z-10 md:w-96 w-80 fixed shadow-md top-0 right-0  my-3 sidebar p-8 pr-2 bg-gray-700 transition-transform ${Object.keys(cart).length === 0 ? "translate-x-96" : "translate-x-0"}`}>
        <div className="sidebartop">
          <h2 className='text-center text-2xl font-bold text-pink-400'>Your Cart</h2>
          <span onClick={toggleCart} className='absolute top-3 right-3 cursor-pointer text-2xl'><AiFillCloseCircle /></span>
        </div>

        <ol className="sidebarbottom list-decimal">
          {
            Object.keys(cart).length === 0 && <><div className='mt-16'>Oops, no item in the cart !</div><TbMoodEmpty className='text-5xl mb-10 mx-auto' /></>
          }
          {Object.keys(cart).map((k) => {
            return <li key={k} className='my-5' >
              <div className='flex items-center text-start'>
                <div className='w-2/3 break-words  sm:text-base mx-2'>{cart[k].name}</div>
                <div>₹{cart[k].price * cart[k].qty}</div>
                <div className='w-1/3  flex items-center justify-center'>< FaMinusSquare onClick={() => { removeFromCart(cart[k].itemCode, 1, cart[k].price, cart[k].name) }} className='text-xl mx-2 cursor-pointer text-pink-400' />{cart[k].qty}<FaPlusSquare onClick={() => { increaseItem(cart[k].itemCode) }} className='text-pink-400 cursor-pointer text-xl mx-2' /></div>
              </div>
            </li>
          })}
        </ol>
        <div className="btngrp flex justify-center">
          <Link href={'/checkout'}><button disabled={Object.keys(cart).length === 0} className={`flex mx-2 mt-7 text-white  bg-gray-600 border-0 py-2 px-2 focus:outline-none ${Object.keys(cart).length == 0 ? "" : "hover:bg-gray-800"} rounded text-sm`}><BsBagCheckFill className='my-auto mr-1' /> CheckOut</button></Link>
          <button onClick={clearCart} className="flex mx-2 mt-7 text-white  bg-gray-600 border-0 py-2 px-2 focus:outline-none hover:bg-gray-800 rounded text-sm"> Clear Cart</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
