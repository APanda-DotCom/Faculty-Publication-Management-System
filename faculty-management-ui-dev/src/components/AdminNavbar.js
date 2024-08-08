import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar(props) {

    return (
        <> 
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
                            {props?.userDetails?.role==='admin'? (
                                <Link to="#" className="nav-link" onClick={(e) => {
                                    e.preventDefault()
                                    props?.logOut();

                                }}>
                                    <i className="fas fa-user"></i> Log Out
                                </Link>
                            ) :('')
                               
                            }
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default AdminNavbar
