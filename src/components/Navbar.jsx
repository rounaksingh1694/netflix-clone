import React, { Component, useEffect, useState } from "react";
import logo from "../netflix_logo.svg";
import avatar from "../netflix_avatar.png";
import "../css/Navbar.css";

const Navbar = () => {
	const [show, handleShow] = useState([]);

	useEffect(() => {
		handleShow(false);
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) handleShow(true);
			else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll", () => {
				console.log("REMOVED");
			});
		};
	}, []);

	return (
		<div className={`nav ${show && "nav_black"}`}>
			<div className="nav_contents">
				<img
					src={logo}
					className="nav_logo"
					alt="Netflix Logo"
					href="https://netflix.com"
					target="_blank"
				/>
				<img src={avatar} className="nav_avatar" alt="Netflix Avatar" />
			</div>
		</div>
	);
};

export default Navbar;
