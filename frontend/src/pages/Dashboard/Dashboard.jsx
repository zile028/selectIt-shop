import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import {dashboardSidebarItem, routes} from "../../router/routes";

function Dashboard(props) {
	return (
		<section className="dashboard-wrapper">
			<div className="topBar container-fluid">
				<div className="row bg-dark text-light" style={{height: "50px"}}>
					<div className="col-3">
						<h3>SelectIT</h3>
					</div>
					<div className="col-9">
						<ul className="nav float-end">
							<li className="nav-item dropdown">
								<button className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown"
										aria-expanded="false">User
								</button>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" to="/">Action</Link></li>
									<li><Link className="dropdown-item" to="/">Another action</Link></li>
									<li><Link className="dropdown-item" to="/">Something else here</Link></li>
									<li><Link className="dropdown-item" to="/">Separated link</Link></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<section className="container-fluid">
				<div className="row" style={{height: "calc( 100vh - 50px )"}}>
					<aside className="col-2 bg-dark text-light">
						<ul className="list-group">
							{dashboardSidebarItem.map((item, index) => {
								return <li key={index} className="list-group-item bg-transparent">
									<NavLink className="text-decoration-none text-light"
											 to={item.path} end={true}>{item.name}</NavLink>
								</li>
							})}

						</ul>
					</aside>
					<div className="col-10 p-3">
						<Outlet/>
					</div>
				</div>

			</section>
		</section>
	);
}

export default Dashboard;