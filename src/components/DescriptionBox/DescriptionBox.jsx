import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(112)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitate buying and 
                selling of products or services over the internet 
                serves as a virtual marketplace wehre businesses and 
                individual showcase their products, interact with 
                customers, and conduct transactions without the need 
                for a physical presence. E-commerce websites have 
                gained immense poplularity due to their convenience, 
                accessibility, and the global reach they offer</p>
                <p>
                    E-commerce websites typically display products or
                     services with a detailed descriptions, images, 
                     prices, and any available variable(e.g. sizes, colors). 
                     Each product usually has its own dedication with 
                     relavent information.
                </p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
