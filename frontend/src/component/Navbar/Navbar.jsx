import React, { useEffect, useState } from "react";
import {Link, NavLink} from "react-router-dom";
import {mainNavbarItem, routes} from "../../router/routes";
import Dorpdown from "./Dorpdown";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../store/userSlice";
import logo from "../../assets/logo.png";
import {removeFromCart} from "../../store/cartSlice";
import Cart from "../Cart/Cart";
import CategoryServices from "../../services/CategoryServices";

function Navbar() {
	const [categories, setCategories] = useState();
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [dropVisible, setDropVisible] = useState(false);
	const {user} = useSelector((store) => store.userStore);
	const {cart, totalPrice} = useSelector((store) => store.cartStore);
	const dispatch = useDispatch();

	useEffect(() => {
		CategoryServices.getAllCategory()
			.then((res) => setCategories(res.data))
			.catch((err) => console.log(err))
	}, [])

	const renderSelectedCategory = (index) => {
        setSelectedCategory(index)
    }
	
	const renderDropdown = () => {
		if(!dropVisible) {
			setDropVisible(true)
		} else {
			setDropVisible(false)
		}
		
	}

	const renderedCategories = () => {
		return categories?.map((category, index) => {
			return <li key={category._id}>
				<Link to="/" onClick={() => {
					renderSelectedCategory(index)
					setDropVisible(false)
				}}>
					{category.name}
				</Link>
			</li>
		})
	}

	return (
	  <>
		  <div id="top-header">
			  <div className="top-header container-fluid no-padding">
				  <div className="container">
					  <ul className="contact">
						  <li>
							  <NavLink
								to="tel:(+1)123-456-7890"
								title="(+1) 123 - 456 - 7890"
							  >
								  <i className="fa fa-phone" aria-hidden="true"></i>
								  <span>Phone :</span> (+1) 123 - 456 - 7890
							  </NavLink>
						  </li>
						  <li>
							  <NavLink
								to="mailto:Info@Ourdomain.Com"
								title="Info@Ourdomain.Com"
							  >
								  <i className="fa fa-envelope-o" aria-hidden="true"></i>
								  <span>Email :</span> Info@Ourdomain.Com
							  </NavLink>
						  </li>
					  </ul>
					  <div className="dropdown-bar">
						  <div className="language-dropdown">
							  <label>Currency :</label>
							  <button
								className="btn dropdown-toggle"
								type="button"
								id="currency"
								title="currency"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="true"
							  >
								  USD<span className="caret"></span>
							  </button>
							  <ul>
								  <li>
									  <NavLink to="/" title="Usd">
										  Usd
									  </NavLink>
								  </li>
								  <li>
									  <NavLink to="/" title="Ora">
										  Ora
									  </NavLink>
								  </li>
								  <li>
									  <NavLink to="/" title="Riyal">
										  Riyal
									  </NavLink>
								  </li>
							  </ul>
						  </div>
						  <div className="language-dropdown">
							  <button
								className="btn dropdown-toggle"
								type="button"
								id="Username"
								title="Username"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="true"
							  >
								  {user.hasOwnProperty("email") ? user.firstName : "My Account"}
								  <span className="caret"></span>
							  </button>
							  <ul>
								  {user.hasOwnProperty("email") ? (
									<>
										<li>
											<li>
												<NavLink to={routes.DASHBOARD.path} title="login">
													Dashboard
												</NavLink>
											</li>
											<button onClick={() => dispatch(logoutUser())}>
												Logout
											</button>
										</li>
									</>
								  ) : (
									<>
										<li>
											<NavLink to={routes.LOGIN.path} title="login">
												Login
											</NavLink>
										</li>
										<li>
											<NavLink to={routes.REGISTER.path} title="register">
												Register
											</NavLink>
										</li>
									</>
								  )}
							  </ul>
						  </div>
					  </div>
				  </div>
			  </div>

			  <div className="middle-header container-fluid">
				  <div className="container">
					  <div className="row">
						  <div className="col-md-3 col-sm-4 col-xs-4">
							  <div className="logo-block">
								  <Link to={routes.HOME.path}>
									  <img src={logo} alt="logo" height="38" width="120"/>
								  </Link>
							  </div>
						  </div>
						  <div className="col-md-9 py-3 float-right">
							  <div className="header-info">
								  <div className="col-md-9 col-sm-9 col-xs-9 d-flex">
									  <div className="input-group">
										  <div className="input-group-btn">
											  <button
												type="button"
												className="btn btn-default dropdown-toggle"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false"
												onClick={renderDropdown}
											  >
												  {selectedCategory !== null ? categories[selectedCategory]?.name : 'Category'}
												  <span className="caret"></span>
											  </button>
											  {
												dropVisible && <ul>
													{renderedCategories()}
												</ul>
											  }
										  </div>
										  <input
											type="text"
											placeholder="Search..."
											className="form-control"
										  />
										  <span className="input-group-btn">
                        <button
                          type="button"
                          title="Search"
                          className="btn btn-search"
                        >
                          <i className="fa fa-search">icon</i>
                        </button>
                      </span>
									  </div>
									  <Cart/>
								  </div>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
		  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
			  <div className="container">
				  <Link className="navbar-brand" id="nvb-brand" to="/">
					  Home
				  </Link>
				  <button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				  >
					  <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse" id="navbarNav">
					  <ul className="navbar-nav">
						  {mainNavbarItem.map((item, index) => {
							  return (
								<li key={index}>
									<NavLink aria-current="page" to={item.path}>
										{item.name}
									</NavLink>
									{item.hasOwnProperty("subitem") ? (
									  <Dorpdown items={item.subitem}/>
									) : null}
								</li>
							  );
						  })}
					  </ul>
				  </div>
			  </div>
		  </nav>
	  </>
	);
}

export default Navbar;