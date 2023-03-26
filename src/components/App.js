import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigTileList from "./PigTileList";

function App() {
	const[filter, setFilter]=useState("all")
	const[sort, setSort]=useState("")

	return (
		<div className="App">
			<Nav filter={filter}setSort={setSort}setFilter={setFilter}/>
			<PigTileList sort={sort}filter={filter}PorkersData={hogs}/>
		</div>
	);
}

export default App;
