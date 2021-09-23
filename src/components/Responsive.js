import React, { Component } from 'react';
import './styling.css';
import Card from './Card'

class Responsive extends Component {
    render() {
        let { fcard } = this.props;

        return (
            <div id="contact" className="x3 container-fluid">
                <h1>Responsive</h1>
                {fcard.map((item, index) => {
                    return <Card key={item.id} title={item.title} awesome={item.awesome} desc={item.desc} ></Card>
                })}

            </div>
        );
    }
}

export default Responsive;