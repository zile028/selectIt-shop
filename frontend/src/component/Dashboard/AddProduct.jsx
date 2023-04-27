import React, { useEffect, useState } from 'react';
import {useFormik} from "formik";
import * as Yup from "yup"
import {FileParser} from "../../utils/FileParser";
import CategoryServices from '../../services/CategoryServices';
import BrandServices from '../../services/BrandServices';
import ProductService from '../../services/productService';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VALID_TYPE = [
    "image/jpg", "image/png", "image/jpeg"
]

const KB = 1024
const MB = KB * 1024


function AddProduct() {
    const [allCategory, setAllCategory] = useState([]);
    const [allBrand, setAllBrand] = useState([]);


    const formik = useFormik({
        initialValues: {
            title: "", price: "", stock: "", brand: "", category: "", description: "", thumbnail: null
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Filed is required"),
            price: Yup.string().required("Filed is required"),
            stock: Yup.string().required("Filed is required"),
            brand: Yup.string().required("Filed is required"),
            category: Yup.string().required("Filed is required"),
            description: Yup.string().required("Filed is required"),
            thumbnail: Yup.mixed()
                .required("Filed is required")
                .test("fileType", "Invalid file type", (value) => VALID_TYPE.includes(value.type))
                .test("fileSize", "File is to large", (value) => value.size < 2 * MB)
        }),
        onSubmit: (values) => {
            FileParser(values.thumbnail)
                .then((res) => {
                    values.thumbnail = res
                    ProductService.addProduct(values)
                        .then(res => toast(res.data, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            }))
                        .catch((err) => console.log(err));
                })
                .catch(err => console.log(err));

            formik.resetForm();
        }
    })

    useEffect(()=>{
        CategoryServices.getAllCategory()
            .then(res => setAllCategory(res.data));

        BrandServices.getAllBrand()
            .then(res => setAllBrand(res.data));
    },[])

    console.log(allCategory);

    const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name]

    return <>
        <div className="container">

            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="">Title <span>{showError("title")}</span></label>
                <input className="form-control mb-2" type="text" name="title" placeholder="Title"
                       onInput={formik.handleChange}
                       value={formik.values.title}
                />
                <label htmlFor="">Price <span>{showError("price")}</span></label>
                <input className="form-control mb-2" type="number" name="price" placeholder="Price"
                       onInput={formik.handleChange}
                       value={formik.values.price}
                />
                <label htmlFor="">Stock <span>{showError("stock")}</span></label>
                <input className="form-control mb-2" type="number" name="stock" placeholder="Stock"
                       onInput={formik.handleChange}
                       value={formik.values.stock}
                />

                <label htmlFor="">Thumbnail <span>{showError("thumbnail")}</span></label>
                <input className="form-control mb-2"
                       type="file"
                       name="thumbnail" placeholder="Thumbnail"
                       onInput={(e) => {
                           formik.setFieldValue(e.target.name, e.target.files[0])
                       }}
                />

                <label htmlFor="">Brand <span>{showError("brand")}</span></label>
                <select className="form-control mb-2" name="brand" onChange={formik.handleChange}
                        value={formik.values.brand}>
                    <option value="" disabled={true}>Brand</option>
                    {
                        allBrand.map(el => {
                            return (
                                <option value={el._id} key={el._id}>{el.name}</option>
                            )
                        })
                    }
                </select>

                <label htmlFor="">Category <span>{showError("category")}</span></label>
                <select className="form-control mb-2" name="category" onChange={formik.handleChange}
                        value={formik.values.category}>
                    <option value="" disabled={true}>Category</option>
                    {
                        allCategory.map(el => {
                            return (
                                <option value={el._id} key={el._id}>{el.name}</option>
                            )
                        })
                    }
                    
                </select>

                <label htmlFor="">Description <span>{showError("description")}</span></label>
                <textarea className="form-control mb-2" name="description" cols="30" rows="10"
                          placeholder="Description" onInput={formik.handleChange}
                          value={formik.values.description}
                >
                </textarea>
                <button className="button button--primary" type="submit">Add product</button>
            </form>

            <ToastContainer/>
        </div>

    </>

}

export default AddProduct;