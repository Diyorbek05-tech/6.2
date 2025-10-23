import React from 'react'
import cloe from '../assets/cloe.png'

const Cloe = () => {
  return (
    <section className="p-4 my-10">
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 items-center">
          <div className="flex flex-col md:items-end text-right gap-4">
            <h2 className="text-5xl font-bold text-gray-900">Cloe</h2>
            <p className="text-lg italic text-gray-700">Modular Storage System</p>
            <p className="text-base text-gray-600">From $1,176</p>
            <p className="text-base text-gray-700 max-w-md leading-relaxed">
              An <span className="italic">expansive</span> way to furnish your space exactly how you
              need it and like it. Transform it in exactly what you need
              like a bookshelf, tv stand or show rack, you pick.
            </p>
            <button className="mt-4 text-base font-medium text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
              Shop now
            </button>
          </div>
            <img src={cloe}/>
        </div>
      </div>
    </section>
  )
}

export default Cloe