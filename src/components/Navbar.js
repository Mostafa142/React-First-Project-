import React, { useContext } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import './styling.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimesCircle, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from './../assets/images/logo.png';
import { Context } from './CounterContext'
import './styling.css';

export default function Navbar(props) {


    const values = useContext(Context);

    return (
        <nav className="x1">
            <ReactBootStrap.Navbar className="container-fluid bg-dark" collapseOnSelect expand="lg" variant="dark">
                <ReactBootStrap.Container className="contain bg-dark " >
                    <ReactBootStrap.Navbar.Brand href="#"><img className="bg-light" src={logo} alt="Brand" /></ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="me-auto">
                            <ReactBootStrap.Nav.Link href="#shop" className="fonts text-light">Shop</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link className="fonts" href="#ts">Top Sales</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.NavDropdown className="fonts" title="Menu" id="collasible-nav-dropdown">
                                <ReactBootStrap.NavDropdown.Item href="#action/3.1">For Men</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Divider />
                                <ReactBootStrap.NavDropdown.Item href="#action/3.2">For Women</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Divider />
                                <ReactBootStrap.NavDropdown.Item href="#action/3.3">For Kids</ReactBootStrap.NavDropdown.Item>
                            </ReactBootStrap.NavDropdown>
                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>

                            <ReactBootStrap.Nav.Link className="fonts" href="#contact">Contact</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link className="fonts" eventKey={2} href="#about">
                                About
                            </ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#" target="_blank">
                                <FontAwesomeIcon icon={faSearch} size="1x" />
                            </ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="https://www.facebook.com/mostafa.fathi.92167" target="_blank">
                                <FontAwesomeIcon icon={faFacebookF} size="1x" />
                            </ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="https://www.instagram.com/mos__tafa_1/" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} size="1x" />
                            </ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="https://www.linkedin.com/in/mostafa-fathi-a962a820b/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
                            </ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="https://twitter.com/Mos__tafa_1" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} size="1x" />
                            </ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link disabled className="text-warning"><FontAwesomeIcon icon={faCartPlus} />{values.counter}</ReactBootStrap.Nav.Link>
                            {
                                values.counter > 0 &&
                                <ReactBootStrap.Nav.Link onClick={values.zero} ><FontAwesomeIcon icon={faTimesCircle} /></ReactBootStrap.Nav.Link>
                            }
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
        </nav>
    );

}

