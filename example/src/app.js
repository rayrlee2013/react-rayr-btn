import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <h1>测试2</h1>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
