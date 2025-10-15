import React from 'react'
import Service from '../../common/Service'

const Services:React.FC = () => {
  return (
    <div className="w-full flex justify-center py-2  px-6">
        <div className="w-full max-w-7xl m-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          <Service
            heading="Secured payment"
            paragraph="Vestibulum nulla tortor, eleifen odio."
            img={"/assets/imgs/Credit_Card.png"}
          />
          <Service
            heading="In-store pickup"
            paragraph="Vestibulum nulla tortor, eleifen odio."
            img={"/assets/imgs/018-shop.png"}
          />
          <Service
            heading="Limited time offers"
            paragraph="Vestibulum nulla tortor, eleifen odio."
            img={"/assets/imgs/014-package.png"}
          />
          <Service
            heading="Worldwide shipping"
            paragraph="Vestibulum nulla tortor, eleifen odio."
            img={"/assets/imgs/006-discount.png"}
          />
        </div>
      </div>
  )
}

export default Services
