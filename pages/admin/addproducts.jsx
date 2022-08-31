import { React, useRef, useState, useEffect } from 'react'
import Image from 'next/image';
import {useRouter} from 'next/router';
import { AiFillCloseCircle } from 'react-icons/ai'

import storage from '../../firebase/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import Dashnav from '../../components/dashnav';

const Addproducts = () => {


   


    const router = useRouter();

    const [slug, setSlug] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [avlqty, setAvlqty] = useState("")
    const [category, setCategory] = useState()
    const [file, setFile] = useState()
    const [progress, setProgress] = useState(0);
    const [progressShow, setProgressShow] = useState(false);





    const refClick = useRef();

    const targetImage = () => {
        refClick.current.click();
    }

    const handleChange = (e) => {
        if (e.target.name == "slug") {
            setSlug(e.target.value);
        } else if (e.target.name == "title") {
            setTitle(e.target.value);
        } else if (e.target.name == "description") {
            setDescription(e.target.value);
        } else if (e.target.name == "price") {
            setPrice(e.target.value);
        } else if (e.target.name == "avlqty") {
            setAvlqty(e.target.value);
        } else if (e.target.name == "category") {
            setCategory(e.target.value)
        } else {

        }
    }



    const handleUpload = () => {
        setProgressShow(true)

        const fileName = uuidv4(); + file.name
        const storageRef = ref(storage, `/images/${fileName}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', (snapshot) => {
            const uploaded = Math.floor(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )
            setProgress(uploaded)
        }, (error) => {
            console.log(error);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {

                let data = { "slug": slug, "title": title, "description": description, "image": url, "category": category, "availableQty": avlqty, "price": price }
                console.log(data);
                let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                })
                let res = await response.json()
                if (res.status) {
                    setProgressShow(false);
                    toast.success("product Added :)");
                    setFile(null);
                    setSlug("");
                    setTitle("");
                    setDescription("");
                    setAvlqty("");
                    setPrice("");
                }



            })
        })


    }






    return (
        <>
       
        <Dashnav/>
        <div className="pb-16 pt-5 bg-gradient-to-r from-gray-500 to-gray-900 flex flex-col items-center justify-center  ">
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
            <div className="md:px-10 px-2 xs:p-0 w-[90vw] md:w-3/6 ">

                <div className='mx-auto text-center'>
                    <h5 className='my-2 text-white text-2xl'>Buyceps Dashbord</h5>
                    <h5 className='text-white my-3'>Add a new product</h5>
                </div>

                <div className="bg-gray-200 shadow  rounded-lg divide-y divide-gray-200">
                    <div className="px-5 py-7">
                        <label className="font-semibold text-sm text-gray-600  block">Slug</label>
                        <input value={slug} onChange={handleChange} type="text" name='slug' className="border rounded-lg px-3 py-1  mb-5 text-sm w-full" />

                        <label type="text" className="font-semibold text-sm text-gray-600  block">Title</label>
                        <input value={title} onChange={handleChange} type="text" name='title' className="border rounded-lg px-3 py-1 mb-5 text-sm w-full" />

                        <label className="font-semibold text-sm text-gray-600  block">Description</label>
                        <input value={description} onChange={handleChange} type="text" name='description' className="border rounded-lg px-3 py-1  mb-5 text-sm w-full" />

                        <label className="font-semibold text-sm text-gray-600  block">Price</label>
                        <input value={price} onChange={handleChange} type="number" name='price' className="border rounded-lg px-3 py-1  mb-5 text-sm w-full" />

                        <label className="font-semibold text-sm text-gray-600  block">Availble Quantity</label>
                        <input value={avlqty} onChange={handleChange} type="number" name='avlqty' className="border rounded-lg px-3 py-1  mb-5 text-sm w-full" />


                        <div className='mb-7 mt-2' >
                            <label className="font-semibold text-sm text-gray-600 inline ">Category:
                                <select id="select" name="category" onChange={handleChange} className=' border-2 border-gray-700 outline-none mx-4 px-2 p-1 rounded-md'>
                                    <option value="machine">machine</option>
                                    <option value="dumbell">dumbell</option>
                                    <option value="plate">plate</option>
                                    <option value="bench">bench</option>
                                </select>
                                {progressShow &&
                                    <span className=' md:ml-72 '>{progress}% uploaded</span>
                                }
                            </label>
                        </div>

                        {file &&
                            <div className='w-full md:w-3/6 md:mx-auto m-2 mt-4 p-2 relative'>
                                <AiFillCloseCircle onClick={() => { setFile(null) }} className='text-red-500 text-2xl z-10 absolute top-0 right-0 ' />
                                <Image width={1000} height={1000} alt="" className='object-cover' src={URL.createObjectURL(file)} ></Image>
                            </div>
                        }

                        <button onClick={targetImage} type="button" className=" transition duration-200 bg-pink-500 hover:bg-pink-600  focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            <span className="inline-block mr-2">+Add Image</span>
                        </button>
                        <input ref={refClick} type="file" name='file' accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} className="hidden" />
                        <button type="button" className="mt-2 transition duration-200 bg-gray-700 hover:bg-gray-800  focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            <span onClick={handleUpload} className="inline-block mr-2">Add product</span>
                        </button>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}

export default Addproducts