import React from 'react';
import ReactDOM from 'react-dom';
import MorbaxApp from './components/MorbaxApp.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <MorbaxApp />
    </BrowserRouter>,
    document.getElementById('content')
);
