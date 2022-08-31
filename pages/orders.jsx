import React, { useEffect } from 'react'
import Image from 'next/image';
import {useRouter} from 'next/router'
// import Order from '../models/order'

const Orders = () => {

    const router = useRouter();

    useEffect(() => {
      if(!localStorage.getItem('userToken')){
        router.push('/')
      };
    })
    
    return (
        <div className='mb-10'>
            <h1 className='text-3xl font-bold text-center text-gray-600 my-10 '>Orders</h1>
            <table className="table-auto md:mx-auto mx-2 my-4">
                <thead>
                    <tr >
                        <th className='py-4 text-xl'>Name</th>
                        <th className='py-4 text-xl'>Price</th>
                        <th className='py-4 text-xl'>Item</th>
                    </tr>
                </thead>
                <tbody className='shadow-xl'>
                    <tr className='hover:bg-gray-600 bg-white hover:text-white border rounded-sm'>
                        <td className='md:px-10 py-2 px-2 break-words md:w-auto max:w-44'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td className='md:px-28 py-2 w-24 text-center'>₹400</td>
                        <td className='md:px-28 py-2 px-2'><Image src={'/logo.jpg'} alt="hehe" width={65} height={65} ></Image></td>
                    </tr >
                    <tr className='hover:bg-gray-600 bg-white hover:text-white border rounded-sm'>
                        <td className='md:px-10 py-2 px-2 break-words md:w-auto max:w-44'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td className='md:px-28 py-2 w-24 text-center'>₹400</td>     
                        <td className='md:px-28 py-2  px-2'><Image src={'/logo.jpg'} alt="hehe" width={65} height={65} ></Image></td>
                    </tr>
                    <tr className='hover:bg-gray-600 bg-white hover:text-white border rounded-sm'>
                        <td className='md:px-10 py-2 px-2 break-words md:w-auto max:w-44'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td className='md:px-28 py-2 w-24 text-center'>₹400</td> 
                        <td className='md:px-28 py-2 pr-2 pl-1'><Image src={'/logo.jpg'} alt="hehe" width={65} height={65} ></Image></td>
                    </tr>
                    <tr className='hover:bg-gray-600 bg-white hover:text-white border rounded-sm'>
                        <td className='md:px-10 py-2 px-2 break-words md:w-auto max:w-44'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td className='md:px-28 py-2 w-24 text-center'>₹400</td> 
                        <td className='md:px-28 py-2 pr-2 pl-1'><Image src={'/logo.jpg'} alt="hehe" width={65} height={65} ></Image></td>
                    </tr>
                    <tr className='hover:bg-gray-600 bg-white hover:text-white border rounded-sm'>
                        <td className='md:px-10 py-2 px-2 break-words md:w-auto max:w-44'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td className='md:px-28 py-2 w-24 text-center'>₹400</td> 
                        <td className='md:px-28 py-2 pr-2 pl-1'><Image src={'/logo.jpg'} alt="hehe" width={65} height={65} ></Image></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


// export async function getServerSideProps(context) {
//     if(!mongoose.connections[0].readyState){
//         await mongoose.connect(process.env.MONGO_URI)
//     }
//     let data = await Product.find({})
//     let orders = JSON.parse(JSON.stringify(data))
//     return {
//         props: { orders }, // will be passed to the page component as props
//     }
// }

export default Orders