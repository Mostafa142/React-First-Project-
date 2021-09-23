import React, { useState, useContext } from "react";
import './styling.css';
import data from "./data";
import { Context } from './CounterContext';
const Shop = () => {
    const value = useContext(Context);

    const [items, setItems] = useState(data);
    const filterItem = (categItem) => {
        const updatedItems = data.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }
    return (

        <div className="x4 container-fluid">
            <h1 id="shop">Shop</h1>
            <div className="btns">
                <button className="btn btn-outline-warning" value="all" onClick={() => setItems(data)} >All</button>
                <button className="btn btn-outline-warning" value="Shoes" onClick={() => filterItem('shoes')}>Shoes</button>
                <button className="btn btn-outline-warning" value="T-Shirt" onClick={() => filterItem('t-shirt')}>T-Shirt</button>
                <button className="btn btn-outline-warning" value="Gloves" onClick={() => filterItem('Gloves')}>Gloves</button>
            </div>
            {
                items.map((elem) => {
                    const { id, product, description, src, alt } = elem;
                    return (
                        <div key={id} className="card" style={{ width: "18rem" }}>
                            <img className="card-image-top imgcontain" src={src} alt={alt} />
                            <div className="card-body text-center" >
                                <h5 className="card-title bg-warning">{product}</h5>
                                <p className="card-text">{description}</p>
                                <button className="btn btn-dark" onClick={value.view} >Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}
export default Shop;