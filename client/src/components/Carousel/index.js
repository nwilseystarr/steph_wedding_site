import React, { Component } from 'react';
import M from 'materialize-css';
import options from 'materialize-css';
import './style.css';
import image1 from './image1.jpg';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';

export class Carousel extends Component {
    constructor(props) {
        super(props);

        // const countdown = () => {

        // };

        // countdown();


        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, options);

        });

    };

    render() {
        return (
            <div className="carousel">
                <a className="carousel-item" href="#one!"><img src={image1} className="carousel-image pt-5 mt-5" alt="..." /></a>
                <a className="carousel-item" href="#two!"><img src={image2} className="carousel-image pt-5 mt-5" alt="..." /></a>
                <a className="carousel-item" href="#three!"><img src={image3} className="carousel-image pt-5 mt-5" alt="..." /></a>
                <a className="carousel-item" href="#four!"><img src={image4} className="carousel-image pt-5 mt-5" alt="..." /></a>
                <a className="carousel-item" href="#five!"><img src={image5} className="carousel-image pt-5 mt-5" alt="..." /></a>
            </div>
        )
    }
}

export default Carousel;
