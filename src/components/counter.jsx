import React from 'react';

const count = 2;
const formatCount = () => {
    return count === 0 ? 'empty' : count;
}
const Counter = () => {
    return (
        <>
        <h1>{formatCount()}</h1>
        </>
    );
}

export default Counter;