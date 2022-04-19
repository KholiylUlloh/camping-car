import Image from 'next/image'
import React from 'react'
import car from '../assets/images/car.png'

const MotorDropdown = () => {
  return (
    <div className='flex flex-col items-center w-full'>
    <div className='flex items-center justify-between px-[5rem] w-full'>
        <div className='flex flex-col items-center cursor-pointer'>
            <Image src={car} alt="camping car" />
            <div className=' text-base font-Montserrat text-main'>Car Name</div>
        </div>
        <div className='flex flex-col items-center cursor-pointer'>
            <Image src={car} alt="camping car" />
            <div className=' text-base font-Montserrat text-main'>Car Name</div>
        </div>
        <div className='flex flex-col items-center cursor-pointer'>
            <Image src={car} alt="camping car" />
            <div className=' text-base font-Montserrat text-main'>Car Name</div>
        </div>
        <div className='flex flex-col items-center cursor-pointer'>
            <Image src={car} alt="camping car" />
            <div className=' text-base font-Montserrat text-main'>Car Name</div>
        </div>
        <div className='flex flex-col items-center cursor-pointer'>
            <Image src={car} alt="camping car" />
            <div className=' text-base font-Montserrat text-main'>Car Name</div>
        </div>
    </div>
    <div className='flex items-center justify-center text-lg bg-bttn w-[13rem] h-10 mt-10 text-[#FFFFFF] rounded-lg active:scale-95 duration-75 transition-all ease-linear cursor-pointer '>
        See All
    </div>
    </div>
  )
}

export default MotorDropdown