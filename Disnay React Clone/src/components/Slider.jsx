import React, { useEffect, useRef, useState } from 'react'
import { HiChevronRight,HiChevronLeft } from "react-icons/hi2";
import GlobalApi from '../services/GlobalApi';
const Slider = () => {
    const sliderRef=useRef();
    const [list,setList]=useState([]);
    const screenWidth=window.innerWidth;
    useEffect(()=>{
    (async ()=>{
        const data=await GlobalApi.getTrendingMovies();
        setList(data.data.results);
    })();
    },[])
    const slideRight=(e)=>{
        e.scrollLeft+=screenWidth-130  
    //scrolling from right to left and right and removing the padding we had given
    }
    const slideLeft=(e)=>{
        e.scrollLeft-=screenWidth+130
     }
  return (
   <div>
    <HiChevronLeft onClick={()=>slideLeft(sliderRef.current)} className='max-md:hidden absolute left-5 text-2xl top-56 cursor-pointer'/>
    <HiChevronRight onClick={()=>slideRight(sliderRef.current)} className='max-md:hidden absolute right-5 text-2xl top-56 cursor-pointer'/>
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={sliderRef} >
        {list.map((item,index)=>{ 
            return(
                <div key={item.id} className='min-w-full hover:border-[4px] border-gray-400 transition-all ease-in mr-3 rounded-xl duration-100'>
                    <img src={GlobalApi.imageBaseUrl+item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top rounded-lg'></img>
                </div>     
            ) 
        })}
    </div>
   </div>
  )
}

export default Slider
