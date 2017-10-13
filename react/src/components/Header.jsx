import React from 'react';
import createReactClass from 'create-react-class';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default createReactClass({
    render(){
        return (
            <header className="header-app">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 app-brand">
                            <a className="navbar-brand" href="http://localhost:8080"><img src="images/logo.png" alt="Morbax logo" className="logo-img img-fluid"/> </a>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-5 col-xl-5 app-search">
                            <div className="form-group">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            <input type="text" className="search-input" placeholder="Search..."/>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 user-panel">
                            <ul className="navbar-nav mr-auto user-notification">
                                <li className="nav-item">
                                    <i className="fa fa-calendar" aria-hidden="true"></i>
                                </li>
                                <li className="nav-item">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </li>
                                <li className="nav-item">
                                    <i className="fa fa-bell" aria-hidden="true"></i>
                                </li>
                            </ul>
                            <div className="user-info">
                                <img src="images/hr.jpg" alt="User avatar" className="user-avatar"/>
                                <div className="user-p">
                                    <p className="user-name">Ms. Dutsy</p>
                                    <p className="user-position">HR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
});
