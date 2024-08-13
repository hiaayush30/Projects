import React from 'react'
import GenereList from '../Constant/GenereList'
import MovieList from './MovieList'

const GenreMovieList = () => {
    return (
        <div>
            {GenereList.genere.map((item, index) => {
                if(index<=4) return <div key={item.id} className='p-8 px-8 md:px-16'>
                    <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                    <MovieList genereId={item.id} index_={index}/>
                </div>
            })}
        </div>
    )
}

export default GenreMovieList
