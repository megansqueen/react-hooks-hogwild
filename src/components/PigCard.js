import React, { useState } from 'react';
import AdditionalDetails from './AdditionalDetails';

function PigCard({ item }) {
    const[showInfo, setShowInfo] = useState(false)

    function handleInfo(event) {
        event.preventDefault()
        setShowInfo(!showInfo)
        console.log(showInfo)
        }

    return (
        <div>
            <div key={item.name}className="four wide colume">
                <div key={item.name}className="ui link cards">
                    <div key={item.name}className="card">
                        <div className="image"key={item.name}>
                            <img onClick={handleInfo}src={item.image}
                                alt={item.name} />
                            <h2 key={item.name}>{item.name}</h2>
                            <AdditionalDetails showInfo={showInfo}specialty={item.specialty} greased={item.greased} weight={item.weight} pigName={item.name}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

)
}

export default PigCard

