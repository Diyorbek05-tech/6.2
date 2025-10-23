import React from 'react'
import alada from '../assets/alada.png'

const Alada = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 px-4 lg:px-12">
            <p className="text-sm text-red-500 italic">New Favorite!</p>
            <h2 className="text-5xl font-bold text-gray-900">Alada</h2>
            <p className="text-lg italic text-gray-700">Floating folding desk</p>
            <p className="text-base text-gray-600">From $534</p>
            <p className="text-base text-gray-700 max-w-md leading-relaxed">
              A timeless and discreet folding desk that seamlessly transforms into a decorative shelf in seconds.
            </p>
            <p className="text-sm text-gray-600">+ 4 color finishes</p>
            <button className="mt-4 text-base font-medium text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
              Shop now
            </button>
          </div>

          <div className="w-full">
            <img src={alada} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Alada