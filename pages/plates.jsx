import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Product from '../models/product';
import mongoose from 'mongoose';


const Plates = ({ products }) => {
    return (
        <div className='platesContainer'>
            <div className="heading ">
                <h1 className='text-5xl mt-11 text-center'>Plates</h1>
                <p className='font-bold text-center mt-3'>We offer best build quility product</p>
            </div>
            <section className="text-gray-600 body-font md:w-11/12 m-auto">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {products.map((product) => {
                            return <Link key={product.slug} href={`/products/${product.slug}`}>
                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <div className='border-2 bg-white shadow-xl'>
                                        <a className="block relative h-72 rounded overflow-hidden">
                                            <Image height={1000} width={1000} alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
                                        </a>
                                        <div className="mt-4">

                                            <h2 className="text-gray-900 title-font text-lg font-medium px-2">{product.title}</h2>
                                            <p className="my-1 px-2">₹{product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getServerSideProps(context) {
    if(!mongoose.connections[0].readyState){
        await mongoose.connect(process.env.MONGO_URI)
    }
    let data = await Product.find({category: "plate"})
    let products = JSON.parse(JSON.stringify(data))
    return {
        props: { products }, // will be passed to the page component as props
    }
}
export default Plates