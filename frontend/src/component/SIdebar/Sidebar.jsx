import React, {useEffect, useState} from 'react'
import CategoryServices from '../../services/CategoryServices'
import {Link} from "react-router-dom";
import {routes} from "../../router/routes";

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
                            <Link to={routes.CATEGORY_PRODUCTS.realPath(el.name)}>{el.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar