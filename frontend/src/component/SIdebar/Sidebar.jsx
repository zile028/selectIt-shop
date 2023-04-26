import React, { useEffect, useState } from "react";
import CategoryServices from "../../services/CategoryServices";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import { MdSearch } from "react-icons/md";

function Sidebar() {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    CategoryServices.getAllCategory()
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  const renderSelectedCategory = (index) => {
    setSelectedCategory(index)
  }

  const renderedCategories = () => {
return category.map((el, index) => {
      return (
        <li key={el._id} className="sidebar__list-item">
          <Link
            to={routes.CATEGORY_PRODUCTS.realPath(el.name)}
            className={selectedCategory === index ? `sidebar__list-link--active` : `sidebar__list-link`}
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

      </ul>
    </div>
  );
}

export default Sidebar;
