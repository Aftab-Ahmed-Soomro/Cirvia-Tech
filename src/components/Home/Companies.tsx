import React from 'react'

const images = [
    { id: 1, src: "/assets/imgs/company1.png" },
    { id: 2, src: "/assets/imgs/company2.png"},
    { id: 3, src: "/assets/imgs/company3.png"},
    { id: 4, src: "/assets/imgs/company4.png"},
    { id: 5, src: "/assets/imgs/company5.png"},
    { id: 6, src: "/assets/imgs/company6.png"}
]

const Companies: React.FC = () => {
    
  return (
    <div className='py-8 flex px-6 max-w-6xl m-auto'>
        { 
           images.map((item, index) => {
                    return (
                    <div key={index}>
                        <img src={item.src} alt="" />
                    </div>
                )
           })
        }
    </div>
  )
}

export default Companies
