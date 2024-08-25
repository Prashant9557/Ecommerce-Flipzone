import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assests/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div>
      <div className="breadcrum">
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product.catergory} <img src={arrow_icon} alt="" /> {product.name}
      </div>
    </div>
  )
}

export default Breadcrum
