import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import './styling.css';
import image1 from './../assets/images/1.jpg';
import image2 from './../assets/images/2.jpg';
import image3 from './../assets/images/3.jpg';
class Carousel extends Component {
    render() {
        return (
            <ReactBootStrap.Carousel id="home" fade>
                <ReactBootStrap.Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        height="730px"

                    />
                    <ReactBootStrap.Carousel.Caption>
                        <div className="h1_a">
                            <h1>Men's Collection</h1>
                            <h2>sale 30 %</h2>
                        </div>
                    </ReactBootStrap.Carousel.Caption>
                </ReactBootStrap.Carousel.Item>

                <ReactBootStrap.Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                        height="730px"
                    />
                    <ReactBootStrap.Carousel.Caption>
                        <div className="h1_a">
                            <h1 >women's Collection</h1>
                            <h2>sale 30 %</h2>
                        </div>
                    </ReactBootStrap.Carousel.Caption>
                </ReactBootStrap.Carousel.Item>

                <ReactBootStrap.Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                        height="730px"
                    />

                    <ReactBootStrap.Carousel.Caption>
                        <div className="h1_a">
                            <h1>A sport Roshe Run</h1>
                            <h2>sale 30 %</h2>
                        </div>
                    </ReactBootStrap.Carousel.Caption>
                </ReactBootStrap.Carousel.Item>
            </ReactBootStrap.Carousel>
        );
    }
}

export default Carousel;