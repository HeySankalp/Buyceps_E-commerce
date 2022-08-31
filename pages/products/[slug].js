import { React, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Error from 'next/error';
import connectdb from '../../middleware/dbConection';
import Product from '../../models/product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TbRoute } from 'react-icons/tb';


const Slug = ({ addToCart, productItem, cart, error }) => {

  let router = useRouter();
  const { slug } = router.query;
  const [pincode, setPincode] = useState()
  const [service, setService] = useState();

  const onChange = (e) => {
    setPincode(e.target.value);
  }

  const handleBuyNow = () => {
    addToCart(slug, 1, productItem.price, productItem.title, productItem.description,productItem.availableQty);
    router.push('/checkout')
  }


  const checkPinCode = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    let pincodes = await response.json();
    console.log(pincode);
    if (pincodes.includes(parseInt(pincode))) {
      setService(true);
      toast.success('This pincode is servicable');
    } else {
      setService(false)
      toast.error('This pincode is not servicable');
    }

  }

  if (error) {
    return <Error statusCode={404} />
  }

  return (
    <>
     <ToastContainer
      position="top-center"
      theme="dark"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className='lg:w-1/2 w-full lg:h-auto h-64 rounded border-2'>
              <Image width={1000} height={1000} alt="ecommerce" className=" object-cover object-center" src={`${productItem.image}`} />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Buyceps.com</h2>
              <h1 className="text-pink-400 text-3xl title-font font-medium mb-1">{productItem.title}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-gray-600" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-gray-600" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-gray-600" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-gray-600" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-gray-600" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{productItem.description}.</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Check offers</span>

                </div>
                <div className="flex ml-6 items-center">
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">₹{productItem.price}</span>
                <button onClick={handleBuyNow} className="flex ml-2 md:ml-4 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Buy now</button>
                <button onClick={()=>{addToCart(slug,1,productItem.price,productItem.title,productItem.description,productItem.availableQty)}} className="flex ml-2 md:ml-4 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Add to Cart</button>
              </div>
              <div className='flex my-5'>
                <input className='border-2 rounded-md px-2 w-40 border-gray-400' placeholder='Enter pincode' onChange={onChange} value={pincode} type="number" />
                <button onClick={checkPinCode} className="flex md:mx-4 mx-2 text-white bg-gray-600 border-0 py-1 md:px-4 px-2  focus:outline-none hover:bg-gray-800 rounded">Check pincode</button>
              </div>
              {
                (!service && service != null) && <div className='text-red-500'>sorry! we do not diliver to this pincode</div>
              }
              {
                (service && service != null) && <div className='text-green-600'>yay! your pincode is servicable</div>
              }

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  connectdb();
  let slugItem = await Product.findOne({ slug: context.query.slug });
  if(!slugItem){
    let error = true
    return {
      props: { error },
    }
  }
  let productItem = JSON.parse(JSON.stringify(slugItem));
  return {
    props: { productItem },
  }
}

export default Slug