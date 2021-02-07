import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "./Navbar.js";
import { Jumbotron } from "./Jumbotron.js";
import { Cards } from "./Cards.js";
import { Footer } from "./Footer.js";
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<React.Fragment>
			<Navbar />

			<Jumbotron />

			<Cards />

			<Footer />
		</React.Fragment>
	);
}
