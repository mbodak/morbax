import React from 'react';
import createReactClass from 'create-react-class';
import $ from 'jquery';
import Company from './content/Company.jsx';
import Header from './Header.jsx';
//import Content from './Content.jsx';
import './style/MorbaxApp.less';

export default createReactClass({
    render() {
        return (
            <div className="wrapper">
                <Company />
            </div>

        );
    },
});
