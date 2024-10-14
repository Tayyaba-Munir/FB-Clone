
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='w-screen mt-12'>
        <div className='flex justify-start items-center flex-col gap-2'>
            <h5 className='font-bold text-4xl'>Activities</h5>
            <p className='text-2xl uppercase font-light'>
                Eduhub Intitute of Technology
            </p>
            <p className='w-3/5  text-center md:text-[22px] xs:text-[15px] font-fantasy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus odio alias iusto perspiciatis, blanditiis reprehenderit expedita voluptate ipsa rerum enim corporis
                 ullam incidunt possimus totam molestiae aliquam, nam fuga.</p>
                 <div className='flex xs:flex-col md:flex-row justify-center items-center gap-6'>
                <img className='md:w-1/4 xs:w-3/4 shadow-lg hover:shadow-2xl' src='https://media.istockphoto.com/id/1456749194/photo/college-students-arriving-for-night-school.jpg?s=1024x1024&w=is&k=20&c=PiS4Hn3S366cV-CeszZ7IyTIbMg3aebclyIVpK32fFg='alt='img1'/>
                <img className='md:w-1/4 xs:3/4 shadow-lg hover:shadow-2xl' src='https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_960_720.jpg' alt='img2'/>
                <img className='md:w-1/4 xs:3/4 shadow-lg hover:shadow-2xl'src='https://cdn.pixabay.com/photo/2016/01/19/01/42/library-1147815_960_720.jpg' alt='img3'/>
                 </div>
                 <button className='border-red-500 border-2 p-2 rounded-md'>View more</button>
            </div>
            </section> 
  )
}
export default About



