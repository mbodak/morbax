import React from 'react';
import createReactClass from 'create-react-class';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default createReactClass({
    handleNavbar(event){
        if ($('#mySidenav').css('width') == '200px') {
            $('#mySidenav').css('width', '70px');
            $('.nav li span').css('display', 'none');
        } else {
            $('#mySidenav').css('width', '200px');
            $('.nav li span').css('display', 'inline-block');
        }
        $('.nav-btn').toggleClass('close-btn');
    },
    render() {
        return (
            <div className="navbar-app">
                <div id="mySidenav" className="sidenav">
                    <div className="nav-btn" onClick={this.handleNavbar}>
                        <div className="nav-img-btn"></div>
                    </div>
                    <ul className="nav nav-main">
                       <li>
                           <a href="#">
                               <i className="fa fa-home" aria-hidden="true"></i>
                               <span>Dashboard</span>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <i className="fa fa-briefcase" aria-hidden="true"></i>
                               <span>Company</span>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <i className="fa fa-user" aria-hidden="true"></i>
                               <span>Employees</span>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <i className="fa fa-clipboard" aria-hidden="true"></i>
                               <span>Vacancies</span>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <i className="fa fa-users" aria-hidden="true"></i>
                               <span>Candidates</span>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <i className="fa fa-handshake-o" aria-hidden="true"></i>
                               <span>HR brand</span>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <i className="fa fa-android" aria-hidden="true"></i>
                               <span>HR bot</span>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <i className="fa fa-bar-chart" aria-hidden="true"></i>
                               <span>Statistics</span>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <i className="fa fa-money" aria-hidden="true"></i>
                               <span>Pricing</span>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <i className="fa fa-headphones" aria-hidden="true"></i>
                               <span>Support</span>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <i className="fa fa-question-circle" aria-hidden="true"></i>
                               <span>FAQ</span>
                           </a>
                       </li>
                   </ul>
                </div>
            </div>
        )
    }
});
