import React from 'react';
import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './components/counter';


const App = () => {
    return (
        <>
            <Counter/>
            <button> + </button>
        </>
    );
}
reactDom.render(<App/>, document.querySelector('#root'));