import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SidebarSearch = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: Yup.object({
      search: Yup.string(),
    }),
    onSubmit: (values) => {
      navigate(`/shop?search=${values.search}`);
    },
  });
  
  return (
    <form onSubmit={formik.handleSubmit} className="sidebar__form">
      <label className="sidebar__label" htmlFor="search">
        Search
      </label>
      <input
        type="text"
        className="sidebar__input"
        placeholder="Search..."
        name="search"
        value={formik.values.search}
        onInput={formik.handleChange}
      />
      <button type="submit" className="sidebar__submit">
        <MdSearch />
      </button>
    </form>
  );
};

export default SidebarSearch;
