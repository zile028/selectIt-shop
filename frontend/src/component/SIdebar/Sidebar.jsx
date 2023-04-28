import React, { useEffect, useState } from "react";
import CategoryServices from "../../services/CategoryServices";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import { MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../store/categorySlice";

function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hiddenCategories, setHiddenCategories] = useState(true);

  const { categories } = useSelector(state => state.categoriesStore)
  const dispatch = useDispatch()

  useEffect(() => {
    CategoryServices.getAllCategory()
      .then((res) => dispatch(setCategories(res.data)))
      .catch((err) => console.log(err));
  }, []);

  const renderSelectedCategory = (index) => {
    setSelectedCategory(index);
  };

  const handleShowCategories = () => {
    hiddenCategories ? setHiddenCategories(false) : setHiddenCategories(true)
  }

  const renderedCategories = () => {
    let copyCategories = [...categories]

    if(hiddenCategories) {
      copyCategories = copyCategories.slice(0, 5)
    } else {
      copyCategories = categories
    }

    return copyCategories.map((el, index) => {
      return (
        <li key={el._id} className="sidebar__list-item">
          <Link
            to={routes.CATEGORY_PRODUCTS.realPath(el.name)}
            className={
              selectedCategory === index
                ? `sidebar__list-link--active`
                : `sidebar__list-link`
            }
            onClick={() => renderSelectedCategory(index)}
          >
            {el.name}
            <span className="sidebar__list-count">({el.count})</span>
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="sidebar">
      <form className="sidebar__form">
        <label className="sidebar__label" htmlFor="search">
          Search
        </label>
        <input
          type="text"
          className="sidebar__input"
          placeholder="Search..."
          name="search"
        />
        <button type="submit" className="sidebar__submit">
          <MdSearch />
        </button>
      </form>
      <h3 className="sidebar__title">Categories</h3>
      <ul className="sidebar__list">
        {renderedCategories()}
        <li className="sidebar__list-btn">
          <button type="button" onClick={handleShowCategories}>
              {hiddenCategories ? 'See more' : 'See less'}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
