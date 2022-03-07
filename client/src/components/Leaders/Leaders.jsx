import React from 'react'
import pjhead from '../../photos/PJheadshot.jpeg'
import daphHead from '../../photos/daphneheadshot.jpeg'

function Leaders() {
    return (
        <div className=' pb-20'>
            <h1 className="text-[50px] font-satisfy text-[#DEC822] p-10">Our Team</h1>
      <div className=" flex flex-col md:flex-row">
          <div className=" flex-1 mb-5 md:mb-0">
            <img className=" w-[200px] h-[200px] m-auto" src={pjhead} alt="" />
            <h2 className=" text-xl text-[#DEC822]">Lead Pastor</h2>
            <p className=" text-[#007b83]">Steve Rhodes</p>
          </div>
          <div className=" flex-1">
            <img className=" w-[200px] h-[200px] m-auto" src={daphHead} alt="" />
            <h2 className=" text-xl text-[#DEC822]">Worship Leader</h2>
            <p className="text-[#007b83]">Daphne Laymon</p>
          </div>
      </div>
        </div>
    )
}

export default Leaders
