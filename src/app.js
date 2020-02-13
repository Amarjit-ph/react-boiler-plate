import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.scss';

const template = (
    <div>
        <h1>REACT APPLICATION USING WEBPACK</h1>
        <p>React Application build using webpack</p>
        <p>Serve using webpack</p>
        <p>Complile with babel core</p>
    </div>
);

ReactDOM.render(template, document.getElementById('app'));