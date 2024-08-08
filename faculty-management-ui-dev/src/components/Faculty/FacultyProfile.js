import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';
import UserService from '../../services/user.service';
import PublicationsDetails from './PublicationDetails';
import moment from 'moment';

const FacultyProfile = (props) => {
    const [switchTab, setSwitchTab] = useState("Dashboard");
    const [dashboardClass, setDashboardClass] = useState("tab-pane active in");
    const [facultyData, setFacultyData] = useState({});
    const location = useLocation();

    const onTabSwitch = (value) => {
		setDashboardClass("tab-pane")
		setSwitchTab(value);
	}

    useEffect(() => {
        UserService.getUserById(location.state.id).then((res) => {
            console.log("result: ", res.data.data.rows[0])
            setFacultyData(res.data.data.rows[0]);
        })
    }, [])

    return (
        <>
        <div className="breadcrumb-area shadow dark text-center bg-fixed text-light" style={{ backgroundImage: "url(assets/img/faculty_4.jpg)" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Faculty Profile</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="adviros-details-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 thumb">
                            <img src={facultyData?.profileImageURL || "assets/img/team/no_profile_pic.jpg"} alt="Thumb" />
                              
                                {(facultyData?.facultyName||facultyData?.designation) &&<div className="desc">
                            <h4>{facultyData?.facultyName}</h4>
                            <span>{facultyData?.designation}</span>
                        </div>}
                                    
                              
                        </div>
                        <div className="col-md-7 info main-content">
                            <div className="tab-info">
                                <ul className="nav nav-pills">
                                    <li className="active">
                                        <a data-toggle="tab" href="#tab1" onClick={() => { onTabSwitch("Dashboard") }} aria-expanded="true">
											Dashboard
										</a>
                                    </li>
                                    <li>
                                        <a data-toggle="tab" href="#tab2" onClick={() => { onTabSwitch("Publications") }} aria-expanded="false">
											Publications
										</a>
                                    </li>
                                </ul>
                                <div className="tab-content tab-content-info">
                                    <div id="tab1" className={switchTab === "Dashboard" ? dashboardClass : "tab-pane fade active in"}>
                                        <div className="info title">
                                            <p>
                                                {facultyData?.bio}
                                            </p>
                                            <ul>
                                                <li>
                                                    Gender <span>{facultyData?.gender}</span>
                                                </li>
                                                <li>
                                                    Contact <span>{facultyData?.mobileNumber}</span>
                                                </li>
                                                <li>
                                                    Email <span>{facultyData?.email}</span>
                                                </li>
                                                <li>
                                                    Department <span>{facultyData?.department} </span>
                                                </li>
                                                <li>
                                                    College <span>{facultyData?.collegeName}</span>
                                                </li>
                                                <li>
                                                    Date Of Joining <span>{ facultyData?.dateOfJoining ? moment(facultyData?.dateOfJoining).format('YYYY-MM-DD') : null}</span>
                                                </li>
                                                <li>
                                                    Academic Qualification <span>{facultyData?.academicQualification}</span>
                                                </li>
                                                <li>
                                                    Publication History <span>{facultyData?.publicationHistory}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="tab2" className={switchTab === "Publications" ? "tab-pane" : "tab-pane fade active in"}>
                                        <div className="info title">
                                            <PublicationsDetails userId={location.state.id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FacultyProfile
