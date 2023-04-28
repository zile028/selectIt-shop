import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import CategoryServices from "../../services/CategoryServices";
import { useFormik } from "formik";
import * as Yup from "yup";

const SearchForm = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    CategoryServices.getAllCategory()
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);


  const renderedCategories = () => {
    return categories?.map((category) => {
      return (
        <option
          key={category._id}
          value={category._id}
          className="form__search-option"
        >
          {category.name}
        </option>
      );
    });
  };

  const formik = useFormik({
    initialValues: {
        searchTerm: "",
        category: ""
    },
    validationSchema: Yup.object({
        searchTerm: Yup.string(),
        category: Yup.string(),
    }),
    onSubmit: (values, {resetForm}) => {
      
        navigate(`/results/${values.searchTerm}`)
        resetForm({values: ""})
    },
    
})

  return (
    <form onSubmit={formik.handleSubmit} className="form__search">
      <select
        className="form__search-btn"
        name="category"
        value={formik.values.category}
        onChange={formik.handleChange}
      >
        <option value="" disabled={true} hidden={true}>
          Category
        </option>
        {renderedCategories()}
      </select>

      <input
        type="text"
        placeholder="Search..."
        className="form__search-input"
        name="searchTerm"
        value={formik.values.searchTerm}
        onInput={formik.handleChange}
        
      />
      <button type="submit" title="Search" className="form__search-submit-btn">
        <MdSearch />
      </button>
    </form>
  );
};

export default SearchForm;
