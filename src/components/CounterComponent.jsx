import React, { useState } from 'react';

const  CounterComponent = () => {
    const [counter,setCounter] = useState(0);
    const [imageUrl,setImageUrl] = useState('http://picsum.photos/200');
    const [tags,setTags] = useState(['tag1','tag2','tag3','tag4'])

    const IncrCount = () => {
       setCounter(counter+1)
    }

    const getbadgeClasses = () => {
        let classes="badge bg-";
        classes += counter > 0 ? 'primary' : 'warning';
        return classes;
    }
    
    const formatCount  = () => {
        return counter === 0 ? 'zero' : counter;
    }

    const renderTags = () => {
        if(tags.length < 1) return <p> no tags found </p>;
        return <ul className='list-group'>
        {tags.map(tag =>   <li key={tag} className='list-group-item'>{tag}</li> )}
    </ul>
    }


        return (
        <>
            <img src={imageUrl}  alt=""/>
            <span className={getbadgeClasses()}>{formatCount()}</span>
            <button type="button" className="btn btn-success" onClick={() => IncrCount()}>Increment</button>
            {/* {renderTags()} */}

            {tags.length < 1 && <p> no tags found </p>};
            {tags.length > 1 && tags.map(tag =>   <li key={tag} className='list-group-item'>{tag}</li> )}

        </>
        );
    
}
 
export default CounterComponent;