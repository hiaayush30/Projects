import React from 'react'

const HeaderItem = ({Icon,name}) => {
  return (
    <div className='hover:underline mb-2 underline-offset-8 flex items-center gap-3 text-[15px] font-semibold cursor-pointer'>
      {<Icon/>}
      <h2>{name}</h2>
    </div>
  )
}

export default HeaderItem
