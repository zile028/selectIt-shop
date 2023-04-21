import React, { useEffect, useState } from 'react'
import CategoryServices from '../../services/CategoryServices'

function Sidebar() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        CategoryServices.getAllCategory()
            .then(res => setCategory(res.data))
            .catch(err => console.log(err))
    }, [])

  return (
    <div className='sidebar'>
        <ul>
        {category.map(el => {
                return (
                   <li key={el._id}>
                        {el.name}
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Sidebar