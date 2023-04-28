import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {MdSearch} from "react-icons/md";
import CategoryServices from "../../services/CategoryServices";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {setCategories} from "../../store/categorySlice";

const SearchForm = () => {
    const {categories} = useSelector(state => state.categoriesStore)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        CategoryServices.getAllCategory()
            .then((res) => dispatch(setCategories(res.data)))
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
        onSubmit: (values) => {
            navigate(`/results?category=${values.category}&term=${values.searchTerm}`)
        },

    })

    return (
        <form onSubmit={formik.handleSubmit} className="form__search">
            <select
                className="form__search-select"
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
                <MdSearch/>
            </button>
        </form>
    );
};

export default SearchForm;
