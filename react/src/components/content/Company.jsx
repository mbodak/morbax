import React from 'react';
import createReactClass from 'create-react-class';
//import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../style/Company.less';

export default createReactClass({
    render() {
        return (
            <div className="company">
                <div className="container">
                    <div className="header">
                        <div>
                            <i className="fa fa-briefcase" aria-hidden="true"></i>
                            <span>&nbsp;&nbsp;&nbsp;IBM</span>
                        </div>

                        <div className="header-right">
                            <a href="#">
                                <i className="fa fa-home" aria-hidden="true">&nbsp;&nbsp;/</i>
                            </a>
                            <a href="#">
                                <span>&nbsp;<strong>Company</strong></span>
                            </a>
                        </div>
                    </div>

                    <div className="company-body">
                        <nav className="nav nav-tabs company-tabs" id="myTab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-assesment-tab" data-toggle="tab" href="#company-assesment" role="tab" aria-controls="nav-assesment" aria-expanded="true">Assesment</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#company-profile" role="tab" aria-controls="nav-profile">Profile</a>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="company-assesment" role="tabpanel" aria-labelledby="nav-assesment-tab">

                                <div id="company-assesment">
                                    <div>
                                        <img className="star" src="images/star.jpg" />
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 mini-social-butt">
                                            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                                            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                                            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                                            <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                                            <label>CONFIRMED</label>
                                        </div>
                                    </div>

                                    <div className="company-progress-bars">
                                        <div className="row inden">
                                            <div className="col-7 col col-xm-7 col-md-7">
                                                <div className="progress light m-md">
                                                    <div className="progress-bar progress-bar-primary progress-bar-1" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>

                                            <div className="col-2 col-xm-2 col-md-2 circular-bar-col">
                                                <div className="circular-bar">
                                                    <div className="circular-bar-chart" data-percent="80" data-plugin-options='{ "barColor": "#0fbfa5", "delay": 10 }'>
                                                        <label><span className="percent">80</span>%</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row inden">
                                            <div className="col-7 col-xm-7 col-md-7">
                                                <div className="progress light m-md">
                                                    <div className="progress-bar progress-bar-primary progress-bar-2" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-2 col-xm-2 col-md-2 circular-bar-col">
                                                <div className="circular-bar">
                                                    <div className="circular-bar-chart" data-percent="72" data-plugin-options='{ "barColor": "#188ea1", "delay": 10 }'>
                                                        <label><span className="percent">72</span>%</label>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row inden">
                                            <div className="col-7 col-xm-7 col-md-7">
                                                <div className="progress light m-md">
                                                    <div className="progress-bar progress-bar-primary progress-bar-3" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-2 col-xm-2 col-md-2 circular-bar-col">
                                                <div className="circular-bar">
                                                    <div className="circular-bar-chart" data-percent="80" data-plugin-options='{ "barColor": "#403e94", "delay": 10 }'>
                                                        <label><span className="percent">80</span>%</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row inden">
                                            <div className="col-7 col-xm-7 col-md-7">
                                                <div className="progress ">
                                                    <div className="progress-bar progress-bar-primary progress-bar-4" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100">
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-2 col-xm-2 col-md-2 circular-bar-col">
                                                <div className="circular-bar">
                                                    <div className="circular-bar-chart" data-percent="68" data-plugin-options='{ "barColor": "#59068a", "delay": 10 }'>
                                                        <label><span className="percent">68</span>%</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="company-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                                <div id="company-profile">
                                    <div className="row icons-list">
                                        <div className="col-12 col-sm-6  col-md-6 col-lg-5 col-xl-4 left">
                                            <i className="fa fa-university" aria-hidden="true">
                                                <span className="span1">&nbsp;&nbsp;Industry: <span className="span2">Apparel & Accessories</span></span>
                                            </i>
                                            <i className="fa fa-pie-chart" aria-hidden="true">
                                                <span className="span1">&nbsp;&nbsp;Sectors: <span className="span2">Apparel & Accessories</span></span>
                                            </i>
                                            <i className="fa fa-users" aria-hidden="true">
                                                <span className="span1">&nbsp;&nbsp;Employees: <span className="span2">50</span></span>
                                            </i>
                                        </div>

                                        <div className="col-12 col-sm-6 col-md-6 col-lg-7 col-xl-8">
                                            <i className="fa fa-gavel" aria-hidden="true">
                                                <span className="span1">&nbsp;&nbsp;Legal entity: <span className="span2">Corporation</span></span>
                                            </i>
                                            <i className="fa fa-pencil-square-o" aria-hidden="true">
                                                <span className="span1">&nbsp;&nbsp;Company register number: <span className="span2">01234567</span></span>
                                            </i>
                                            <i className="fa fa-headphones" aria-hidden="true">
                                                <span className="span1">&nbsp;&nbsp;Services:<span className="span2">
                                                <span>marketing</span>
                                                <span>analytics</span></span></span>
                                            </i>
                                        </div>
                                    </div>

                                    <div className="company-location">
                                        <div className="mini-icons">
                                            <p>
                                                <i className="fa fa-map-marker" aria-hidden="true">
                                                    <span id="spanLocation">&nbsp;&nbsp;&nbsp;Location</span>
                                                </i>
                                            </p>
                                        </div>

                                        <div className="row company-rows-location">
                                            <div className="col-6 col-sm-12">
                                                <div className="row">
                                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                        <p><span className="span1">Country: <span className="span2">USA</span></span></p>
                                                        <p><span className="span1">Street: <span className="span2">West virginia, 67</span></span></p>
                                                    </div>

                                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                        <p><span className="span1">City: <span className="span2">Albuquerque</span></span></p>
                                                        <p><span className="span1">Unit: <span className="span2">589</span></span></p>
                                                    </div>

                                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                        <p><span className="span1">Zip code: <span className="span2">459823</span></span></p>
                                                        <p><span className="span1">Floor: <span className="span2">5</span></span></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-6 col-sm-12">
                                                <div className="row">
                                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                        <p><span className="span1">Country: <span className="span2">USA</span></span></p>
                                                        <p><span className="span1">Street: <span className="span2">West virginia, 67</span></span></p>
                                                    </div>

                                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                        <p><span className="span1">City: <span className="span2">Albuquerque</span></span></p>
                                                        <p><span className="span1">Unit: <span className="span2">589</span></span></p>
                                                    </div>

                                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                        <p><span className="span1">Zip code: <span className="span2">459823</span></span></p>
                                                        <p><span className="span1">Floor: <span className="span2">5</span></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="company-contacts">
                                        <div className="mini-icons">
                                            <p>
                                                <i className="fa fa-phone" aria-hidden="true">
                                                    <span id="spanContacts">&nbsp;&nbsp;Contacts</span>
                                                </i>
                                            </p>
                                        </div>

                                        <div className="row">
                                            <div className="col-6 col-sm-6 col-md-6">
                                                <div className="row">
                                                    <div className="col-12 col-sm-6 col-md-6">
                                                        <p>
                                                          <span className="span1">Tel/Fax: <span className="span2">786633266</span></span>
                                                        </p>
                                                    </div>

                                                    <div className="col-12 col-sm-6 col-md-6">
                                                        <p><span className="span1">Tel/Fax: <span className="span2">786633266</span></span></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-6 col-sm-6 col-md-6">
                                                <div className="row">
                                                    <div className="col-12 col-sm-6 col-md-6">
                                                        <p><span className="span1">Tel/Fax: <span className="span2">786633266</span></span></p>
                                                    </div>

                                                    <div className="col-12 col-sm-6 col-md-6">
                                                        <p><span className="span1">Tel/Fax: <span className="span2">786633266</span></span></p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="company-information-fields">
                                        <div className="form-group">
                                            <label>Tasks</label>
                                            <p>Morbax HR mission is to automate human’s development process and make it fast, smooth and efficient. We strive to build a Human’s Digital Profile by processing data from most popular social spheres to finally adapt an around processes to each individual’s needs.</p>

                                        </div>

                                        <div className="form-group">
                                            <label>Goals</label>
                                            <p>Looking forward, we expect that the Morbax Human’s Digital Profile platform will form the new efficient basis for human’s professional and self-development on a global scale, — which is finally a new level for the building of any kind of collaboration processes between people.</p>

                                        </div>

                                        <div className="form-group">
                                            <label>Culture</label>
                                            <p>Human’s Profile Digitalization is a massive trend poised to become one of the most disruptive innovations in any kind of markets and data science since the beginning of the Information Revolution. First started to be used in marketing campaigns, human’s digitalization processes become more powerful with more data sources and predictive machine learning algorithms. Our team believes undoubtedly that human’s profile digitalization will disrupt some of the largest existing industries and build new ones in the near term. </p>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="company-social-networks">
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                <i className="fa fa-google-plus-square" aria-hidden="true"></i>
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                <i className="fa fa-youtube-square" aria-hidden="true"></i>
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    },
});
