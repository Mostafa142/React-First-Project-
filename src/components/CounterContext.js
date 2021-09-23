import React, { useState } from 'react';
export const Context = React.createContext("");
export default function CounterContext(props) {
    let [counter, setcount] = useState(0);
    const view = () => {
        setcount(++counter);
    }
    const zero = () => {
        setcount(0);
    }
    return (
        <>
            <Context.Provider value={{ counter, setcount, view, zero }}>
                {props.children}
            </Context.Provider>
        </>
    )
}