import React from 'react'
import Link from 'next/link'

const Benches = () => {
    return (
        <div className='benchesContainer'>
            <div className="heading ">
                <h1 className='text-5xl mt-11 text-center'>Benches</h1>
                <p className='font-bold text-center mt-3'>We offer best build quility products</p>
            </div>
            <section className="text-gray-600 body-font md:w-11/12 m-auto">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <Link href={'/products/is-is-products-id'}>
                        <div className="lg:w-1/4 md:w-1/2 cursor-pointer p-4 w-full">
                            <a className="block relative h-72 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/gymbench.jpg" />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                <p className="mt-1">₹16.00</p>
                            </div>
                        </div>
                        </Link>
                        <Link href={'/products/this-is-products-id'}>
                        <div className="lg:w-1/4 md:w-1/2 cursor-pointer p-4 w-full">
                            <a className="block relative h-72 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/gymbench.jpg" />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                <p className="mt-1">₹21.15</p>
                            </div>
                        </div>
                        </Link>
                        <Link href={'/products/this-is-products-id'}>
                        <div className="lg:w-1/4 md:w-1/2 cursor-pointer p-4 w-full">
                            <a className="block relative h-72 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/gymbench.jpg" />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                <p className="mt-1">₹12.00</p>
                            </div>
                        </div>
                        </Link>
                        <Link href={'/products/this-is-products-id'}>
                        <div className="lg:w-1/4 md:w-1/2 cursor-pointer p-4 w-full">
                            <a className="block relative h-72 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/gymbench.jpg" />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p className="mt-1">₹18.40</p>
                            </div>
                        </div>
                        </Link>
                        <Link href={'/products/this-is-products-id'}>
                        <div className="lg:w-1/4 md:w-1/2 cursor-pointer p-4 w-full">
                            <a className="block relative h-72 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/gymbench.jpg" />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                <p className="mt-1">₹16.00</p>
                            </div>
                        </div>
                        </Link>
                        <Link href={'/products/this-is-products-id'}>
                        <div className="lg:w-1/4 md:w-1/2 cursor-pointer p-4 w-full">
                            <a className="block relative h-72 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/gymbench.jpg" />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                <p className="mt-1">₹21.15</p>
                            </div>
                        </div>
                        </Link>
                        <Link href={'/products/this-is-products-id'}>
                        <div className="lg:w-1/4 md:w-1/2 cursor-pointer p-4 w-full">
                            <a className="block relative h-72 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/gymbench.jpg" />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                <p className="mt-1">₹12.00</p>
                            </div>
                        </div>
                        </Link>
                        <Link href={'/products/this-is-products-id'}>
                        <div className="lg:w-1/4 md:w-1/2 cursor-pointer p-4 w-full">
                            <a className="block relative h-72 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/gymbench.jpg" />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p className="mt-1">₹18.40</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Benches