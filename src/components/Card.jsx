import React from 'react'

const Card = ({ title, image, releasedate }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      {/* <p>{releasedate}</p> */}
    </div>
  )
}

export default Card