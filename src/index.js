import React from 'react';
import ReactDOM from 'react-dom';
import Beranda from "./components/Beranda.js";
import Gallery from "./components/Gallery.js";
import Daftarharibesar from "./components/Daftarharibesar.js";
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
					<li><Link to="/">Beranda</Link></li>
					<li><Link to="/gallery">Gallery</Link></li>
					<li><Link to="/daftar">Daftar hari lingkungan</Link></li>
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