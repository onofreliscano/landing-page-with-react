import React from "react";

//export function Cards(props) {
export const Cards = props => {
	const myCards = ["one", "two", "three", "four"];

	return (
		<div className="row text-center">
			{myCards.map((aCard, index) => (
				<div className="card cardItem" key={index}>
					<img
						className="card-img-top"
						src="https://dummyimage.com/500x325/787878/fff"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title {aCard}</h5>
						<p className="card-text">
							{
								"Some quick example text to build on the card title and make up the bulk of the card's content."
							}
						</p>
						<a href="#" className="btn btn-primary">
							Find Out more!
						</a>
					</div>
				</div>
			))}
		</div>
	);
};
