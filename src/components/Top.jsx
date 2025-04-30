import React from 'react'

const Top = ({ isVisible }) => {
    const toTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <div className='fixed bottom-2 right-2'>
            <button className='cursor-pointer text-black bg-white rounded-full p-1 font-bold shadow-md shadow-black' onClick={toTop} style={{ opacity: isVisible ? "0" : "1", transition: ".2s ease-in-out" }}>Back to Top</button>
        </div>
    )
}

export default Top
