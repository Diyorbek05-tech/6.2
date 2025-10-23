import React from 'react'
import alba from '../assets/alba.png'
import alba_f from '../assets/alba_f.png'

const Alba = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="w-full">
            <img 
              src={alba} 
              className="w-full h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 px-4 lg:px-12">
            <h2 className="text-5xl font-bold text-gray-900">Alba Collection</h2>
            <p className="text-lg italic text-gray-700">Modular bedside table & shelf</p>
            <p className="text-base text-gray-600">From $272</p>
            <p className="text-base text-gray-700 max-w-md leading-relaxed">
              A versatile and modular piece with a sculptural touch that can be used as a wall shelf or as a bedside table with concealed storage.
            </p>
            <p className="text-sm text-gray-600">+ 6 color finishes, infinite combinations</p>
            <button className="mt-4 text-base font-medium text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
              Shop now
            </button>
            
            <div className="flex items-center gap-4 mt-8">
              <img src={alba_f}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Alba