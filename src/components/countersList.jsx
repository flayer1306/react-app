import React, { useState } from 'react';
import Counter from './counter';


const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: 'Ненужная вещь' },
        { id: 1, value: 0, name: 'Тарелка' },
        { id: 2, value: 4, name: 'Ложка' },
        { id: 3, value: 0, name: 'Вилка' },
        { id: 4, value: 0, name: 'Набор минималиста' },
    ];

    const [ counters, setCounters ] = useState(initialState);

    const handleDelete = (id) => {
        // setCounters((prevState) =>prevState.filter((count) => count.id !== id))
        const newCounters = counters.filter((count) => count.id !== id);
        setCounters(newCounters);
    };
    const handleReset = () => {
        setCounters(initialState);
    };
    const handleIncrement = (id) => {
        const incValue = counters.map((count) => {
            let newObj;
            if (count.id === id) {
                newObj = { ...count,
                    value: count.value + 1,
                };
            } else {
                newObj = {...count};
            }
            return newObj;
        });
        setCounters(incValue);
    };

    const handleDecrement = (id) => {
        const decValue = counters.map((count) => {
            let newObj;
            if (count.id === id) {
                newObj = {
                    ...count,
                    value: count.value - 1,
                };
            } else {
                newObj = {...count};
            }
            return newObj;
        });
        setCounters(decValue);
    };
    return (

        <>
            {counters.map((count) =>
                <Counter
                    key={count.id}
                    {...count}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                />
            )}
            <button className="btn btn-primary btn-sm m-2"
                    onClick={handleReset}
            >
                Сброс
            </button>
        </>
    )
}
export default CountersList;