import 'react-rayr-btn/src/RayrBtn.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrBtn} from 'react-rayr-btn';

function App() {
    return (
        <h1>组件脚手架测试 <RayrBtn/></h1>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
