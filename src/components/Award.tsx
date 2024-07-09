import { url } from 'inspector'
import React from 'react'
import Image from 'next/image'


const awards=[
    {
        name:"HiPiPo Women In FinTech Hackathon",
        description:"Merged 4th place out of 100+ participants",
        date:"Aug 2023",
        icon:"🏅",
        image:"/images/hipopo.jpg",
    },
    {
        name:"MoMo Hackathon",
        description:"Merged 4th place out of 100+ participants",
        date:"Nov 2023",
        icon:"🏅",
        image:"/images/momo.jpg",
    }
]
function Award() {

    
  return (
   

<div className="">
      {awards.map((award, index) => (
        <div
          className="flex flex-col border-b w-full px-20 pt-5 pb-5 "
          key={index}
        >
         
          <div className="flex gap-3">
            <div>
              <div className="text-xl font-bold text-gray-900 border rounded-full flex justify-center w-[40px] h-[40px] items-center">
                {award.icon}
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <div className="flex gap-2">
                  <div className="text-sm font-bold text-black ">
                    {award.name}
                  </div>
                  <div className="text-sm text-gray-500">{award.date}</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">{award.description}</div>
              </div>
              <div className="image object-cover w-full rounded-lg overflow-hidden my-2">
              <Image src={award.image} alt={award.name} width={500} height={10} />
            </div>
            </div>
           
          </div>

          
        </div>
      ))}


    </div>
  )
}

export default Award