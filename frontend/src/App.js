import './App.css';
import axios from "axios";
import Navbar from "./component/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "./component/Footer/Footer";
import React from "react";


axios.defaults.baseURL = "http://localhost:4000/"

function App() {

	return (
	  <>
		  <Navbar/>
		  <Outlet/>
		  <Footer/>
	  </>
	);
}

export default App;
