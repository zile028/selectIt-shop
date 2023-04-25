import React from 'react'

function SingleReview(props) {
    
  return (
    <div className='review'>
      <div className='client' >
        <div className='info-img'>
       <p className='info'>{props.text}</p>
         <div className='img-container'>
          <img src={props.image} alt={props.name} className='person-img' />
        </div>

        </div>
          <h4 className='author'>{props.name}</h4>
          <p className='job'>{props.job}</p>
        </div>
    </div>
  )
}

export default SingleReview
