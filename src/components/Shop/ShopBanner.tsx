import React from 'react'

const ShopBanner:React.FC = () => {
  return (
    <div>
      <div className='bg-[url("/assets/imgs/Group10.png")] bg-cover bg-start w-full h-52 flex px-8'>
        <div className="max-w-6xl w-full m-auto flex items-end">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold mb-4 leading-tight text-white text-left">
            Shop
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ShopBanner
