import React from 'react'
import GlobalApi from '../services/GlobalApi'

const MovieCard = ({movie}) => {
  return (
    <>
      <img src={GlobalApi.imageBaseUrl+movie.poster_path} className='rounded-lg  w-[110px] md:w-[200px] hover:border-[3px] border-gray-400 hover:scale-110 transition-all ease-in duration-100'></img>
    </>
  )
}

export default MovieCard
