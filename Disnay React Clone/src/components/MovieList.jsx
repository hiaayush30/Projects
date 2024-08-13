import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import HrMovieCard from './HrMovieCard';

const MovieList = ({ genereId,index_ }) => {
    const screenWidth=window.innerWidth;
    const slideRef=useRef(null);
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        getMovieByGenereId();
    }, [])
    const getMovieByGenereId = () => {
        GlobalApi.getMovieByGenreId(genereId).then((res) => {
            setMovieList(res.data.results);
        })
    }
    const slideRight=(e)=>{
        e.scrollLeft+=screenWidth-100  
    //scrolling from right to left and right and removing the padding we had given
    }
    const slideLeft=(e)=>{
        e.scrollLeft-=screenWidth+100
     }
    return (
        <div className='relative'>
            {/* The transform class is used to apply CSS transformations like translation, rotation, scaling, and skewing to an element. */}
            <HiChevronLeft onClick={() => slideLeft(slideRef.current)} className={`${index_%3==0 && 'top-28'} transform -translate-x-8 max-md:hidden absolute left-0 text-2xl top-36 cursor-pointer`} />
            <HiChevronRight onClick={() => slideRight(slideRef.current)} className={`${index_%3==0 && 'top-28'} transform translate-x-8 max-md:hidden absolute right-0 text-2xl top-36 cursor-pointer`} />
            <div ref={slideRef} className='flex gap-8 overflow-x-auto scrollbar-hide pt-5 px-3 pb-5 cursor-pointer scroll-smooth'>
                {movieList.map((item, index) => {
                   {return index_%3==0 ? <HrMovieCard movie={item}/> :<MovieCard movie={item} />}
                })}
            </div>
        </div>
    )
}

export default MovieList
