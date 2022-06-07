import React, { Component, useState } from 'react';
import CounterComponent from './CounterComponent';

function Counters() {
    const [counters,SetCounters] = useState([
    {
        id: 1,
        count: 4,
    },
    {
        id: 2,
        count: 8,
    },
    {
        id: 3,
        count: 16,
    },
    {
        id: 4,
        count: 32,
    },
]);

const handleDelete = (props_count) => {
    let filteredCounters = counters.filter(count => count.id !== props_count.id);
    SetCounters(filteredCounters);
}
const handleReset = () => {
    let countersTemp = counters.map(c => {
        c.count =0;
        return c;
    }) 
    SetCounters(countersTemp)
    console.log(countersTemp);
}

const handleIncrement = (countObject) => {
    let countersTemp = counters.map(c => {
        countObject.id == c.id && c.count++;
        return c;
    }) 
    SetCounters(countersTemp)
    console.log('handleIncr',countObject);
}
const handleDecrement = (countObject) => {
    let countersTemp = counters.map(c => {
        countObject.id == c.id && c.count--
        return c;
    }) 
    SetCounters(countersTemp)
    console.log('handleDecr',countObject);
}

    return ( <>
            <button onClick={handleReset} type="button" className='btn btn-primary'>Reset All</button>
            <ul className='list-group'>
                {counters.map(ele =>  <li  key={ele.id} className="list-group-item">
                    <CounterComponent 
                    onDecr={handleDecrement}  
                    onIncr={handleIncrement} 
                    onDelete={() => handleDelete(ele)} CountValue={ele.count}
                    countObject={ele}
                    >
                        Children Title
                    </CounterComponent>
                    
                    </li>)}
            </ul>
    </>);
}

export default Counters;