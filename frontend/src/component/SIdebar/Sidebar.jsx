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

    const renderedCategories = () => {
        return category.map(el => {
            return (
                <li key={el._id} className='sidebar__item'>
                    <Link 
                        to={routes.CATEGORY_PRODUCTS.realPath(el.name)}
                        className='sidebar__link'
                    >
                        {el.name}
                    </Link>
                </li>
            )
        })
    }

    return (
        <div className='sidebar'>
            <form className='sidebar__form'>
                <label className='sr-only'>Search</label>
                <input type='text' className='sidebar__input' />
                <input type='submit' className='sidebar__submit' />
            </form>
            <ul>
                {renderedCategories()}
            </ul>
        </div>
    )
}

export default Sidebar