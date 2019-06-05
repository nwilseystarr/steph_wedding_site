import React, { Component } from 'react';
import './style.css';
import image1 from './image1.jpg';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';

export class Carousel extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col px-0">
                        <div id="carouselImages" className="carousel slide carousel-fade" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselImages" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselImages" data-slide-to="1"></li>
                                <li data-target="#carouselImages" data-slide-to="2"></li>
                                <li data-target="#carouselImages" data-slide-to="3"></li>
                                <li data-target="#carouselImages" data-slide-to="4"></li>
                            </ol>
                            {/*Image One*/}
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={image1} className="d-block vw-100 vh-100 carousel-img" alt="..." />
                                    <div className="carousel-caption">
                                        <h1 className="display-2">Steph and Erv</h1>
                                        <h2 className="border-top border-bottom border-white">February 29, 2020 | Chicago, IL</h2>
                                    </div>
                                </div>
                                {/*Image Two*/}
                                <div className="carousel-item">
                                    <img src={image2} className="d-block vw-100 vh-100 carousel-img" alt="..." />
                                    <div className="carousel-caption">
                                        <h1 className="display-2">Steph and Erv</h1>
                                        <h2 className="border-top border-bottom border-white">February 29, 2020 | Chicago, IL</h2>
                                    </div>
                                </div>
                                {/*Image Three*/}
                                <div className="carousel-item">
                                    <img src={image3} className="d-block vw-100 vh-100 carousel-img" alt="..." />
                                    <div className="carousel-caption">
                                        <h1 className="display-2">Steph and Erv</h1>
                                        <h2 className="border-top border-bottom border-white">February 29, 2020 | Chicago, IL</h2>
                                    </div>
                                </div>
                                {/*Image Four*/}
                                <div className="carousel-item">
                                    <img src={image4} className="d-block vw-100 vh-100 carousel-img" alt="..." />
                                    <div className="carousel-caption">
                                        <h1 className="display-2">Steph and Erv</h1>
                                        <h2 className="border-top border-bottom border-white">February 29, 2020 | Chicago, IL</h2>
                                    </div>
                                </div>
                                {/*Image Five*/}
                                <div className="carousel-item">
                                    <img src={image5} className="d-block vw-100 vh-100 carousel-img" alt="..." />
                                    <div className="carousel-caption">
                                        <h1 className="display-2">Steph and Erv</h1>
                                        <h2 className="border-top border-bottom border-white">February 29, 2020 | Chicago, IL</h2>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselImages" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselImages" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;
