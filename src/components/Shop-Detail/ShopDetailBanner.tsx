import { ChevronRight } from 'lucide-react'
import React from 'react'

const ShopDetailBanner:React.FC = () => {
  return (
    <div>
      <div className='bg-[url("/assets/imgs/ShopDetail.png")] bg-cover bg-center w-full h-64 flex px-8'>
        <div className="max-w-6xl w-full m-auto flex items-end">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold mb-4 leading-tight text-white text-left">
            Shop Detail
          </h1>
        </div>
      </div>
      <div className="px-8">
        <nav className="max-w-6xl m-auto">
          <ol className="flex items-center text-[10px] font-medium py-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <ChevronRight className="w-4 h-4 mx-1" />
            </li>
            <li>
              <a href="/shop" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <ChevronRight className="w-4 h-4 mx-1" />
            </li>
            <li className="">Mobile Phones</li>
          </ol>
          <hr className="text-[#00000017] max-w-7xl" />
        </nav>
      </div>
    </div>
  )
}

export default ShopDetailBanner
