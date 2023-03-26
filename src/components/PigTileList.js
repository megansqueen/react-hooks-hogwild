import React from 'react';
import PigCard from './PigCard';

function PigTileList({ PorkersData, filter, sort }) {
    
    const filteredPigs = PorkersData.filter((item) => {
        if (filter === "all") {
            return PorkersData
        } else if (filter === "greased") {
            return item.greased === true
        } 
    })

    if (sort === "sort by name") {
        filteredPigs.sort((a, b) => {
        if (a.name < b.name) {
            return -1
        } else if (a.name > b.name){
            return 1
        } else {
            return 0
        }
    })}

    if (sort === "sort by weight") {
        filteredPigs.sort((a, b) => {
        if (a.weight < b.weight) {
            return 1
        } else if (a.weight > b.weight){
            return -1
        } else {
            return 0
        }
    })}
    
    console.log(filteredPigs)

    return (
        <div>
         <div className="ui grid">
            {filteredPigs.map(item => (
                <PigCard key={item.name}item={item}/>
            ))} 
        </div>
    </div>   
 )   
}

export default PigTileList

