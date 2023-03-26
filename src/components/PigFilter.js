import React from "react";

function PigFilter({ setFilter, setSort, filter }) {
    
    function handleFilter(filterType) {
        setFilter(filterType)
    }

    function handleSort(sortType) {
        setSort(sortType)
    }

    function handleReset() {
        setSort(0)
        setFilter("all")
    }

    return (
        <div>
            <h2 className="ui header">Filters</h2>
                <button onClick={() => handleFilter("greased")}className="ui red button">Only Greased Pigs</button>
                <button onClick={() => handleSort("sort by name")}className="ui orange button">Sort by name</button>
                <button onClick={() => handleSort("sort by weight")}className="ui yellow button">Sort by weight</button>
                <button onClick={() => handleReset()}className="ui teal button">Reset</button>
            <p>Current Filter: {filter}</p>
        </div>
    )
}

export default PigFilter