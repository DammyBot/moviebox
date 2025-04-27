import React from 'react'

const Card = ({ title, image, releasedate }) => {
  return (
    <div className='relative overflow-hidden'>
      <img src={image} alt={title} className='w-full -z-10 hover:scale-110 transition duration-500 ease-in-out'/>
      <p className='absolute bottom-2 left-2 text-white text-shadow-lg text-shadow-black'>{title}</p>
      {/* <p>{releasedate}</p> */}
    </div>
  )
}

export default Card