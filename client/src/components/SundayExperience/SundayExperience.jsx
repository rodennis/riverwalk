import React from 'react'
import { pillars } from '../Fundamentals/Fundamentals'

function SundayExperience() {
    return (
        <>
        <h1 className="text-[50px] font-satisfy text-[#DEC822] pt-10 mb-5 md:mb-0">
          Sunday Morning Experience
        </h1>
        <p className=" text-[#007b83] m-auto w-[80%] mb-10 md:mb-0 md:w-[60%] md:p-10">
          Riverwalk Church has four pillars to make a great Sunday morning
          experience for you and your family. First, we believe that everyone
          should have a warm and friendly welcome. From the moment you drive
          unto the campus property until you find your way to your seat we want
          you to feel like you belong here at Riverwalk Church. <br /><br/> Next, we not
          only want you to feel like you belong here with us but we also want
          the same experience for your children. We want them to feel like they
          belong here as they learn and grow in a safe, clean, and loving
          environment. <br /> <br/>Third, our goal is for you to have an engaging worship
          expierence. We value worship and we want to have an atmosphere where
          everyone can express their worship to Jesus. Finally, we want to be
          able to present a message that is relevant and practical to your
          everyday life. We want to encourage and uplift you to prepare you for
          the week ahead of you each and every Sunday.
        </p>
        <div className=" flex flex-wrap">
          {pillars.map((pillar) => (
            <div className=" flex-1 border-2 border-[#007b83] m-3 shadow-cardShadow">
              <h2 className=" text-[25px] font-satisfy p-3 text-[#DEC822]">
                {pillar.title}
              </h2>
              <p className=" w-[300px] h-[200px] m-auto font-slab text-[#007b83]">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
        </>
    )
}

export default SundayExperience
