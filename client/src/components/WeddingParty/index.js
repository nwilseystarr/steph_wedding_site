import React from 'react'

function WeddingParty(props){
        return (
            <div className="card">
                <h1>{props.name}</h1>
                <img className="image" alt={props.name} src={props.image} id={props.id} />
            </div>
        )
}

export default WeddingParty;
