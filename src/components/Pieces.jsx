import React from 'react'
import pieces1 from '../assets/pieces1.png'
import pieces2 from '../assets/pieces2.png'
import pieces3 from '../assets/pieces3.png'

let arr = [
    {img: pieces1, id: 1},
    {img: pieces2, id: 2},
    {img: pieces3, id: 3}
]

const Pieces = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl font-bold text-gray-900">Our pieces inside your home</h2>
          <p className="text-base text-gray-600">
            Get inspired by our products in real-life. Tag us and be featured!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {arr.map((item) => (
            <div 
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            >
              <img 
                src={item.img}
                alt={`Interior design ${item.id}`}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className=" inset-0 bg-black group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pieces