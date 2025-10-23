import React from 'react'
import freeshipping from '../assets/freeshipping.png'
import awarded from '../assets/awarded.png'
import ecofriendly from '../assets/ecofriendly.png'
import crafted from '../assets/crafted.png'

let arr = [
    {
        id: 1,
        img: freeshipping,
        title: 'Free Shipping',
    },
    {
        id: 2,
        img: awarded,
        title: 'Awarded Product Design',       
    },
    {
        id: 3,
        img: ecofriendly,
        title: 'Ecofriendly Approach',
    },
    {
        id: 4,
        img: crafted,
        title: 'Crafted in Spain',
    }
]

const Logist = () => {
  return (
    <>
    <section className='flex p-13 items-center justify-between'>
    <div className='flex gap-20  items-center'>
        {arr.map((item) => (
            <div key={item.id} className='flex gap-4 items-center'>
                <img src={item.img} alt={item.title} />
                <p>{item.title}</p>
            </div>
        ))}
    </div>
    <p>4.8 Star Reviews</p>
    </section>
    </>
  )
}

export default Logist