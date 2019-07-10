import React, { Component } from 'react';
import './style.css';
import googleMap from './googleMap.png';

class EventWedding extends Component {
    render() {
        return (
            <div className="container3">
                <div className="row">
                    <div className="col auto">
                        <div className="sectionTitle">
                            The Big Day
                </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="info">
                            Date
                    <br />
                            Time
                    <br />
                            Location
                    <br />
                        </div>
                    </div>
                    <div className="col">
                        <div className="googleMap">
                        <img src={googleMap} alt=" " />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default EventWedding;
