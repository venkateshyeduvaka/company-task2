import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";


import Header from '../components/Header';
import CardItem from '../components/CardItem';

const Home = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.log(`Error fetching dat ${error.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Header/>
    <div className='h-screen mt-14 w-screen  bg-slate-300 overflow-auto custom-scrollbar'>
        <h1 className='text-black text-center mt-3 text-4xl font-semibold'>ALL PRODUCTS</h1>
        <div className='grid grid-cols-4 gap-2 ml-5 mr-5'>
             {data.map((each)=><CardItem key={each.id} data={each}/>)}
        </div>
    </div>
    </>
    
  )
}

export default Home
