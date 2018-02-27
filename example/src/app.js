import 'react-rayr-btn/src/RayrBtn.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrBtn} from 'react-rayr-btn';

function App() {
    return (
        <div>
            <h1>按钮组件</h1>
            <div>
                <RayrBtn type={'primary'}>主按钮</RayrBtn>
                <RayrBtn type={'primary'}>主按钮</RayrBtn>
                <RayrBtn type={'primary'} disabled={true}>主按钮</RayrBtn>
            </div>
            <div>
                <RayrBtn>次按钮</RayrBtn>
                <RayrBtn>次按钮</RayrBtn>
                <RayrBtn disabled={true}>次按钮</RayrBtn>
            </div>
            <div>
                <RayrBtn type={'primary'} size={'sm'}>主按钮</RayrBtn>
                <RayrBtn type={'primary'} size={'sm'}>主按钮</RayrBtn>
                <RayrBtn type={'primary'} size={'sm'} disabled={true}>主按钮</RayrBtn>
            </div>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
