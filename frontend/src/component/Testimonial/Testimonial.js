import React from 'react'
import Reviews from './Review'

function Testimonial() {
  return (
    <div className="main">
        <section className='container'>
        <div className='title'>
             <h1>WORDS FROM CLIENTS</h1>
              <div className='underline'></div>
        </div>
           <Reviews/>

        </section>
    </div>
  )
}

export default Testimonial
