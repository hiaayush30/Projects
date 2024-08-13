import React from 'react'
import GlobalApi from '../services/GlobalApi'

const HrMovieCard = ({movie}) => {
  return (
    <div className='flex flex-col py-3'>
    <img src={GlobalApi.imageBaseUrl+movie.backdrop_path} className='rounded-lg min-h-full w-[110px] md:w-[260px] hover:border-[3px] border-gray-400 hover:scale-110 transition-all ease-in duration-100'></img>
    <h2 className='w-[110px] md:w-[260px] mt-2'>{movie.title}</h2>
  </div>
  )
}

export default HrMovieCard
