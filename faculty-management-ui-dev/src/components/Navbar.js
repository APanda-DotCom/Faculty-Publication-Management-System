import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {



    return (
        <>
            <div className="se-pre-con"></div>
            <div className="top-bar-area address-two-lines bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 address-info">
                            <div className="info box">
                                <ul>
                                    <li>
                                        <span><i className="fa fa-map"></i> Address</span>Bhubaneswar, ODISHA 751019
                                    </li>
                                    <li>
                                        <span><i className="fa fa-envelope-open"></i> Email</span>pal2001suman@gmail.com, sukeshdalai06@gmail.com
                                    </li>
                                    <li>
                                        <span><i className="fa fa-phone"></i> Contact</span>7681020290, 8249886046
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="user-login text-right col-md-4">
                            {props?.isLoggedIn ? (
                                <Link to="#" className="nav-link" onClick={(e) => {
                                    e.preventDefault()
                                    props?.logOut();

                                }}>
                                    <i className="fas fa-user"></i> Log Out
                                </Link>
                            ) :
                                (
                                    <>
                                        <Link to={"/register"} className="nav-link">
                                            <i className="fas fa-edit"></i> Register
                                        </Link>
                                        <Link to={"/login"} className="nav-link">
                                            <i className="fas fa-user"></i> Login
                                        </Link>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <header id="home">


                <nav className="navbar navbar-default navbar-sticky bootsnav">


                    <div className="container">
                        <div className="row">
                            <div className="top-search">
                                <div className="input-group">

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container" style={{ display: 'block' }}>

                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="https://www.soa.ac.in/iter" target="_blank">
                                <img src="assets/img/soa_logo_new.png" width="150px" height="100px" className="logo" alt="Logo" />
                            </a>
                        </div>

                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
                                <li>
                                    <Link to={"/home"} reloadDocument className="nav-link">
                                        HOME
                                    </Link>
                                </li>
                            </ul>
                            {props?.isLoggedIn ? (
                                <>
                                    <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
                                        <li>
                                            <Link to={"/profile"} className="nav-link">
                                                PROFILE
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
                                        <li>
                                            <Link to={"/faculty"} className="nav-link">
                                                FACULTY
                                            </Link>
                                        </li>
                                    </ul>
                                   
                                </>
                            ) : (null)}

                        </div>
                    </div>

                </nav>


            </header>
        </>
    )
}

export default Navbar
