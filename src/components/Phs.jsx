import React from 'react'
import ph1 from '../assets/ph1.png'
import ph2 from '../assets/ph2.png'
import ph3 from '../assets/ph3.png'
import ph4 from '../assets/ph4.png'

const Phs = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-4 p-4'>
        <img src={ph1}/>
        <img src={ph2}/>
        <img src={ph3}/>
        <img src={ph4}/>
    </div>
    </>
  )
}

export default Phs