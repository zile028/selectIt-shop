import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup"

function AddProduct() {
	const formik = useFormik({
		initialValues: {thumbnail: undefined},
		validationSchema: Yup.object().shape({
			thumbnail: Yup.mixed().required("A file is required")
			  .test("fileSize", "File too large",
				(value) => {
					console.log("OVO", value)
					return value
				})
		}),
		onSubmit: (values) => {
			console.log(values.thumbnail.size)
			console.log("test")
		}
	})

	return (
	  <section className="container">
		  <form onSubmit={formik.handleSubmit}>
			  <div className="form">
				  <label htmlFor="">{formik.errors.file && formik.errors.file}</label>
				  <input type="file" name="thumbnail" onInput={formik.handleChange}/>
			  </div>
			  <button className="btn btn-primary" type="submit">Add</button>
		  </form>
	  </section>
	);
}

export default AddProduct;