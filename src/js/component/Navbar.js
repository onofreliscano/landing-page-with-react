import React from "react";

export function Navbar() {
	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo"
				aria-controls="navbarTogglerDemo"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarTogglerDemo">
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Services
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
