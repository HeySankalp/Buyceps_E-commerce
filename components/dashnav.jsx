import { React, useRef, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineShoppingCart, AiFillCloseCircle } from 'react-icons/ai'
import { FaPlusSquare, FaMinusSquare, FaRegUserCircle } from 'react-icons/fa'
import { BsBagCheckFill } from 'react-icons/bs'
import { TbMoodEmpty } from 'react-icons/tb'




const Dashnav = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal, increaseItem }) => {

    let ref = useRef();

    const [dropdown, setDropdown] = useState(false)

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }




    return (
        <div className='py-1 mx-auto text-center bg-gray-900 text-slate-200 flex flex-col justify-center items-center md:flex-row md:justify-between'>
            <div className="logo flex items-center mx-3">
                <Image alt='' className='rounded-full' src="/logo.jpg" width={50} height={50} />
                <span className='mx-2 text-2xl '>Buyceps</span>
            </div>
            <div className="nav">
                <ul className='flex space-x-4 md:space-x-5 font-bold cursor-pointer items-center  md:justify-between '>
                    <Link href={'dashboard'}><a className='text-gray-300 hover:text-pink-400'><li >Products</li></a></Link>
                    <Link href={'addproducts'}><a className='text-gray-300 hover:text-pink-400'><li>AddProduct</li></a></Link>
                </ul>
            </div>


            <div className=" flex md:relative md:top-0 cart absolute right-2 top-4 mx-2 md:mx-5 text-2xl md:text-3xl cursor-pointer items-center">
                <FaRegUserCircle onClick={toggleDropdown} className='mx-3 hover:text-pink-400 ' />
                {dropdown &&
                    <div className='border-2 border-gray-900 absolute bg-gray-700 text-white top-9  text-start   md:right-10 right-3 rounded-md  z-10 text-base shadow-lg'>
                        <ul>
                            <li onClick={logout} className='px-3 pb-2 hover:bg-gray-800'>Logout</li>
                        </ul>
                    </div>
                }

            </div>




        </div>
    )
}

export default Dashnav