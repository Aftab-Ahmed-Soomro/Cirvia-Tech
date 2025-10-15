import React from 'react'

const Aims:React.FC = () => {
  return (
    <div className="p-8 mb-10">
      <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Our Goal */}
          <div className="rounded-[30px] border-[#00000017] border-[1px] p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="w-14 h-14 p-2 bg-[#8000801F] rounded-2xl flex items-center justify-center mb-6">
              <img className='w-[700px]' src="/assets/imgs/fcc0efca4db1c2ad848b31848ebed58afa8996d2.png" alt="" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Goal</h3>
            <p className="text-[#707070] text-sm leading-relaxed">
              Ut ultricies vestibulum purus. Donec laoreet risus blandit velit elementum, eget sodales leo henrit. Nam rhoncus est ac accumsan fermentum.
            </p>
          </div>

          {/* Our Mission */}
          <div className="rounded-[30px] border-[#00000017] border-[1px] p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="w-14 h-14 p-2 bg-[#8000801F] rounded-2xl flex items-center justify-center mb-6">
                <img className='w-[700px]' src="/assets/imgs/rocket.png" alt="" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-[#707070] text-sm leading-relaxed">
              Ut ultricies vestibulum purus. Donec laoreet risus blandit velit elementum, eget sodales leo henrit. Nam rhoncus est ac accumsan fermentum.
            </p>
          </div>

          {/* Our Ideology */}
          <div className="rounded-[30px] border-[#00000017] border-[1px] p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="w-14 h-14 p-2 bg-[#8000801F] rounded-2xl flex items-center justify-center mb-6">
                <img className='w-[700px]' src="/assets/imgs/idea.png" alt="" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Ideology</h3>
            <p className="text-[#707070] text-sm leading-relaxed">
              Ut ultricies vestibulum purus. Donec laoreet risus blandit velit elementum, eget sodales leo henrit. Nam rhoncus est ac accumsan fermentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aims
