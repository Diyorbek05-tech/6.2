import React from 'react'
import pelican from '../assets/pelican.png' 

const Pelican = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="w-full">
            <img src={pelican}/>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 px-4 lg:px-12">
            <h2 className="text-5xl font-bold text-gray-900">Pelican</h2>
            <p className="text-lg italic text-gray-700">Shelves with hidden hooks</p>
            <p className="text-base text-gray-600">From $89</p>
            <p className="text-base text-gray-700 max-w-md leading-relaxed">
              Store or exhibit your favorite objects in the
              entrance hall, modern hallways, living rooms and
              bedrooms with a decorative and minimalist touch.
            </p>
            <p className="text-sm text-gray-600">+ 3 sizes, + 5 color finishes</p>
            <button className="mt-4 text-base font-medium text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pelican