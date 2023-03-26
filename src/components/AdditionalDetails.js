import React from 'react';

function AdditionalDetails({ specialty, greased, weight, pigName, showInfo }) {
    if (showInfo === true) {
            return (
                <div>
                    <p>Specialty: {specialty}</p>
                    <p>Greased: {greased ? "true" : "false"}</p>
                    <p>Weight: {weight}</p> 
            </div>
            )
    } else {
        return null
    }

}

export default AdditionalDetails