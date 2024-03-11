import React,{ useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Header from '../components/Header'

const Product = () => {

        const {id} = useParams()

        const [data, setData] = useState([]);

        useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            console.log(response.data);
            if (response.status === 200) {
                setData(response.data);
            }
            } catch (error) {
            console.log(`Error fetching dat ${error.message}`);
            }
        };
    
        fetchData();
        }, [id]);



    const {title,price,image,rating,description,category}=data 
    //const {rate,count}=rating
    //console.log("venky")
    //console.log(rating.count)
    //console.log(data.rating)
    const rate = rating ? rating.rate : null;
    const count = rating ? rating.count : null;

  return (
    <>
    <Header/>
    <div className='h-screen mt-14 w-screen  bg-slate-300 overflow-auto custom-scrollbar'>
        <h1 className='text-black text-center mt-5 text-4xl font-semibold'>PRODUCT DETAILED VIEW</h1>
        <div className='flex flex-col'>
             <img src={image} className='h-80 w-80 p-2 self-center mt-3 rounded-md' alt={title}/>
             <h4 className='text-black font-bold text-lg ml-5'>Title:<span>{title}</span></h4>
             <h6 className='text-black font-bold text-lg ml-5'>Category:<span>{category}</span></h6>
             <p className='text-black font-bold text-lg ml-5'>Title:<span className='text-black text-lg font-medium'>{description}</span></p>
             <h4 className='text-black font-bold text-lg ml-5'>Price:<span>{price}</span></h4>
             <p className='text-black font-bold text-lg ml-5'>Rating:<span>{rate}</span></p>
             <p className='text-black font-bold text-lg ml-5'>Count:<span>{count}</span></p>
        </div>
    </div>
    </>
  )
}

export default Product
