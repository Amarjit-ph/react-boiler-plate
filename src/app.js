import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.scss';

const template = (
    <div>
        <h1>REACT APPLICATION USING WEBPACK  </h1>
        <p>React Application build using webpack
        Serve using webpack
        Complile with babel core</p>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
             essentially unchanged. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum scelerisque nibh ut
            facilisis. Quisque semper vitae mi non volutpat. Quisque lorem neque, auctor vitae magna ut,
            lobortis luctus turpis. Curabitur pellentesque lectus eu tortor pretium, in sagittis eros mattis.
            Praesent lectus magna, laoreet ut volutpat sed, fermentum sit amet ante. Donec rhoncus, leo a varius
            semper, urna ante cursus purus, gravida scelerisque turpis odio ut enim. Morbi et dolor justo.
            lit metus, eu iaculis orci ullamcorper eu. Aenean in venenatis dolor, at lacinia neque. Morb
            i pharetra turpis volutpat, laoreet ex eget, commodo ipsum.</p>
    </div>
);

ReactDOM.render(template, document.getElementById('app'));