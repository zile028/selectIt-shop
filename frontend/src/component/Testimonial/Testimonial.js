import React from 'react'
import Reviews from './Review'

function Testimonial() {
  return (
    <main>
        <section className='container'>
        <div className='title'>
                <h1>WORDS FROM CLIENTS</h1>
              <div className='underline'></div>
        </div>
           <Reviews/>

        </section>
    </main>
  )
}

export default Testimonial
