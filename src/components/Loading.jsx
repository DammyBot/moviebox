import reactLogo from "../images/react.svg";

import React from 'react'

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={reactLogo} alt="React" className="w-12 animate"/>
    </div>
  )
}

export default Loading
