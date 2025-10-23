import React from 'react'
import mainbg from '../assets/mainbg.png'


const Hero = () => {
  return (
    <>
    
    <main 
    className='flex flex-col justify-center items-center'
    style={{
          backgroundImage: `url(${mainbg})`, 
          backgroundSize: "cover",           
          backgroundPosition: "center",      
          backgroundRepeat: "no-repeat",     
          height: "50vh",
        }}>
            <h1 className='text-[27px] max-w-[800px] font-bold text-white text-center'>Furniture designed to live in harmony,
                 creating distinctive and timeless spaces</h1>
            <div className='text-center mt-10'>           
                 <button className='text-[20px]  font-semibold cursor-pointer hover:text-black hover:border-black py-1 px-9 text-white border border-white'>Discover now</button>
            </div>
        <div className='text-[15px] opacity-80 absolute bottom-[45vh] left-5 text-white bg-black py-4 px-7'>Do you know what is your decor style?</div>
    </main>
    </>
  )
}

export default Hero