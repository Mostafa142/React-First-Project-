import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import image4 from './../assets/images/4.jpg';
import image5 from './../assets/images/5.jpg';
import image6 from './../assets/images/6.jpg';
import image7 from './../assets/images/7.jpg';
import './styling.css';
class TopSales extends Component {
    render() {
        return (
            <div id="ts" className="x2 container-fluid">
                <h1> Top Sales</h1>
                <ReactBootStrap.Card style={{ width: '18rem' }}>
                    <ReactBootStrap.Card.Img className="imgcontain" variant="top" src={image7} />
                    <ReactBootStrap.Card.Body className="text-center">
                        <ReactBootStrap.Card.Title className="bg-warning">MoSalah Shoes</ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                            Shop for your adidas Shoes 200 $ <del>230$</del>
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button variant="dark">Shop Now</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Body >
                </ReactBootStrap.Card>
                <ReactBootStrap.Card style={{ width: '18rem' }}>
                    <ReactBootStrap.Card.Img className="imgcontain" variant="top" src={image4} />
                    <ReactBootStrap.Card.Body className="text-center">
                        <ReactBootStrap.Card.Title className="bg-warning">CR7 T-Shirt</ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                            Shop for Man-Red T-Shirt 100 $ <del>190$</del>
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button variant="dark">Shop Now</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>
                <ReactBootStrap.Card style={{ width: '18rem' }}>
                    <ReactBootStrap.Card.Img className="imgcontain" variant="top" src={image5} />
                    <ReactBootStrap.Card.Body className="text-center">
                        <ReactBootStrap.Card.Title className="bg-warning">Alex Morgan T-Shirt</ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                            Shop for A Morgan T-Shirt 90 $ <del>110$</del>
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button variant="dark">Shop Now</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>
                <ReactBootStrap.Card style={{ width: '18rem' }}>
                    <ReactBootStrap.Card.Img className="imgcontain" variant="top" src={image6} />
                    <ReactBootStrap.Card.Body className="text-center">
                        <ReactBootStrap.Card.Title className="bg-warning">Messi PSG T-Shirt</ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                            Shop for Messi PSG T-Shirt 150 $ <del>200$</del>
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button variant="dark">Shop Now</ReactBootStrap.Button>
                    </ReactBootStrap.Card.Body>
                </ReactBootStrap.Card>
            </div >
        );
    }
}

export default TopSales;