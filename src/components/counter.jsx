import React from 'react';

const count = 2;
const formatCount = () => {
    return count === 0 ? 'empty' : count;
}
const Counter = () => {
    return (
        <>
        <span>{formatCount()}</span>
        </>
    );
}

export default Counter;