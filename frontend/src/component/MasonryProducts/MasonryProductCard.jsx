import React from 'react'
import {Link} from "react-router-dom"
import {BsArrowRight} from "react-icons/bs"

const MasonryProductCard = ({ product,  larger }) => {

  return (
    <Link to={"/product/" + product._id} className={larger ? `masonry__product` : `masonry__product--smaller`}>
        <div className='masonry__bg-layer' />
        <div className='masonry__img-holder' style={{backgroundImage: "url(" + product.thumbnail + ")"}}>
        </div>
        <div className='masonry__txt-content'>
          <h3 className='masonry__title'>{product.title}</h3>
          <button type='button' className='masonry__btn'>
           Shop now<span><BsArrowRight /></span>
          </button>
        </div>
    </Link>
  )
}

export default MasonryProductCard