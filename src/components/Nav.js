import React from "react";
import piggy from "../assets/porco.png";
import PigFilter from "./PigFilter";

const Nav = ({ filter, setFilter, setSort }) => {

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<PigFilter filter={filter}setSort={setSort}setFilter={setFilter}/>
		</div>
	);
};

export default Nav;
