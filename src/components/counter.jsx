import React from 'react';

let count = 0;
const formatCount = () => {
    return count === 0 ? 'empty' : count;
}

const getBadgeClasses = () => {
    let classes = 'badge m-2 ';
    classes += count === 0 ? 'bg-warning' : 'bg-primary';
    return classes
};

const handleIncrement = () => {
    count += 1;
    console.log(count)
}
const Counter = () => {
    return (
        <>
            <span className = {getBadgeClasses()}>{formatCount()}</span>
            <button className = 'btn btn-primary btn-sm m-2' onClick={handleIncrement}>+</button>
        </>
    );
}

export default Counter;