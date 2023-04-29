import React from 'react'

const Footer = () => {
  return (              
    <>
        <div id="navbar" className="flex bg-[#ECECEC] p-2 drop-shadow-lg w-full" style={{fontFamily:'El Messiri'}}>
            <div id="logo">
                <img src="accilogo.png" alt="" />
            </div>

            <div
            id="name"
            style={{ fontFamily: "El Messiri" }}
            className="text-4xl mx-10 py-3"
            >
                <p>
                    Accident<span className="text-[#D62828]">Stats</span>
                </p>
            </div>

            <div className='flex-1'>

            </div>

            <div>
                <p className='py-6 text-slate-700'>
                All Rights Reserved copyright accistat©2023
                </p>
            </div>
        </div>
        
    </>
  )             
}

export default Footer               