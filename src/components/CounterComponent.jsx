import React, { useState } from 'react';

const  CounterComponent = ({CountValue=0,onDelete,children,onDecr,onIncr,countObject}) => {


    const getbadgeClasses = () => {
        let classes="badge bg-";
        classes += CountValue > 0 ? 'primary' : 'warning';
        return classes;
    }
    
    const formatCount  = () => {
        return CountValue === 0 ? 'zero' : CountValue;
    }


    
        return (
        <>
            {children}
            <button type="button" className="btn btn-info btn-sm" onClick={() => onDecr(countObject)}>Decrement</button>
            <span style={{marginLeft: 20,marginRight: 20,fontSize: 20}} className={getbadgeClasses()}>{formatCount()}</span>
            <button type="button" className="btn btn-dark btn-sm" onClick={() => onIncr(countObject)}>Increment</button>
            <button onClick={() => onDelete()} type="button" className='btn btn-danger btn-sm'>Delete</button>
        </>
        );
    
}
 
export default CounterComponent;