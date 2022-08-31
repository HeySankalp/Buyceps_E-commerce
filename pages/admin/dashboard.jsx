import {React,useEffect} from 'react';
import Product from '../../models/product';
import mongoose from 'mongoose';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { RiDeleteBin6Line } from 'react-icons/ri';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = ({ products }) => {
  const router = useRouter();

  useEffect(() => {
    if(localStorage.getItem("userToken")==process.env.NEXT_PUBLIC_ADMIN){
      console.log("both same");
    }else{
      console.log("not same");
      console.log(localStorage.getItem("userToken"));
      console.log(process.env.NEXT_PUBLIC_ADMIN);
    }

  }, [])
  
  const deleteProduct = async(slug)=>{
    alert("you want to conti")
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/deleteproduct`,{
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({slug})
    })
    let res = await response.json()
    if(res.status){
      toast.success("product deleted :)");
    }else{
      toast.error("oops not deleted :(");
    }
}
  
  

  return (
    <div className='allproducts'>
      
      <div className="heading ">
        <h1 className='text-5xl mt-11 text-center'>All Products</h1>
        <p className='font-bold text-center mt-3'>You are are on admin side</p>
      </div>
      <section className="text-gray-600 body-font md:w-11/12 m-auto ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => {
              return <div key={product.slug} className="relative lg:w-1/4 md:w-1/2 p-4 w-full">
                <span className='text-white text-sm text-center pb-2 z-10 bg-red-500 w-16 h-6 absolute border-4 top-1 right-3 rounded-full border-red-500'>{product.category}</span>
                <div className='border-2 bg-white shadow-xl'>
                  <a className="block relative h-72 rounded overflow-hidden">
                    <Image height={1000} width={1000} alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
                  </a>
                  <div className="mt-4">
                    <div className='flex justify-between'>
                    <h2 className="text-gray-900 title-font text-lg font-medium px-2">{product.title}</h2>
                    <RiDeleteBin6Line onClick={()=>{deleteProduct(product.slug)}} className='hover:text-red-600 mx-3 text-2xl text-black'/>
                    </div>
                    <p className="my-1 px-2">₹{product.price}</p>
                  </div>
                </div>
              </div>


            })}
          </div>
        </div>
      </section >
    </div >
  )
}

export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let data = await Product.find()
  let products = JSON.parse(JSON.stringify(data))
  return {
    props: { products }, // will be passed to the page component as props
  }
}


export default Dashboard