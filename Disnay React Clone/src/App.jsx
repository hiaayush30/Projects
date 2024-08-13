import { useState } from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMovieList'

function App() {

  return (
   <div className='bg-zinc-900 min-h-screen text-white'>
    <Navbar/>
    <Slider/>
    <ProductionHouse/>
    <GenreMovieList/>
   </div>
  )
}

export default App
