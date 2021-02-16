import React from 'react';
import ReactDOM from 'react-dom';
import Beranda from "./components/BMI.js";
import Gallery from "./components/Conversion.js";
import Daftarharibesar from "./components/Cicilan.js";
import "./styles/styles.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

const element = (
	<Router>
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<ul className="nav navbar-nav">
					<li><Link to="/">BMI</Link></li>
					<li><Link to="/gallery">Conversion</Link></li>
					<li><Link to="/daftar">Cicilan</Link></li>
				</ul>
			</div>
		</nav>                                                               
		<div className="main-content">
			<Switch>
				<Route path="/daftar">
					<Daftarharibesar />
				</Route>
				<Route path="/gallery">
					<Gallery />
				</Route>
				<Route path={["/beranda", "/"]}>
					<Beranda />
				</Route>
			</Switch>
		</div>
	</Router>
)

ReactDOM.render(element,document.getElementById('app'));