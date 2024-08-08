import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";
import moment from "moment/moment";
import ShowProfile from "./profile/ShowProfile";
import EditProfile from "./profile/EditProfile";
import Publications from "./profile/Publications";
import { UploadProfile } from "./Antd";
import { toast } from "react-toastify";


const Profile = () => {
	const [formData, setFormData] = useState({
		userName: '',
		collegeName: '',
		facultyName: '',
		email: '',
		department: '',
		designation: '',
		gender: '',
		mobileNumber: '',
		jobNature: '',
		dateOfJoining: '',
		academicQualification: '',
		publicationHistory: '',
		profileImageURL: '',
		bio: ''
	});
	const [switchTab, setSwitchTab] = useState("Dashboard");
	const [userId, setUserId] = useState(null)
	const [dashboardClass, setDashboardClass] = useState("tab-pane active in");

	const userData = localStorage.getItem('userData');
	const userDetails = JSON.parse(userData)
	const [imageUrl, setImageUrl] = useState(userDetails?.profileImageURL || "")

	useEffect(() => {

		setUserId(userDetails?.id)
		setFormData({
			...formData,
			userName: userDetails?.userName,
			email: userDetails?.email,
			collegeName: userDetails?.collegeName,
			facultyName: userDetails?.facultyName,
			department: userDetails?.department,
			designation: userDetails?.designation,
			dateOfJoining: userDetails?.dateOfJoining ? moment(userDetails?.dateOfJoining).format('YYYY-MM-DD') : null,
			gender: userDetails?.gender,
			mobileNumber: userDetails?.mobileNumber,
			jobNature: userDetails?.jobNature,
			academicQualification: userDetails?.academicQualification,
			publicationHistory: userDetails?.publicationHistory,
			profileImageURL: imageUrl,
			bio: userDetails?.bio
		})
	}, [imageUrl])

	const onTabSwitch = (value) => {
		setDashboardClass("tab-pane")
		setSwitchTab(value);
	}

	const onFormValueChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData({
			...formData,
			[name]: value
		})

	}

	const handleUpdate = (e) => {
		e.preventDefault();
	  let reqPayload = { ...formData };
    
	  reqPayload.id = userId;
	  
	  const { dateOfJoining } = formData;
	  
	  if (dateOfJoining) {
		  const joiningYear = new Date(dateOfJoining).getFullYear();
		  const currentYear = new Date().getFullYear();
		  const experience  = currentYear - joiningYear;
		  
		  reqPayload.experience = experience;
	  }
		UserService.updateProfile(reqPayload).then(
			(res) => {

				localStorage.setItem("userData", JSON.stringify(res?.data?.data));
				toast?.success(res?.data?.message)
			},
			(error) => {
				console.log("error>>", error);
			}
		);
	}


	useEffect(() => {

		const token = localStorage.getItem("token")

		const isToken = JSON.parse(token)

		if (isToken && userDetails?.role === 'user') {
			return true
		}
		else {
			window.location.replace("/login")
		}
	}, [])

	return (
		<>
			<div className="breadcrumb-area shadow dark text-center bg-fixed text-light" style={{ backgroundImage: "url(assets/img/soa_college_1.jpg)" }}>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1>Profile</h1>
						</div>
					</div>
				</div>
			</div>

			<div className="students-profiel adviros-details-area default-padding">
				<div className="container">
					<div className="row">
						{/* <div className="col-md-5 thumb">
							<img src="assets/img/team/6.jpg" alt="Thumb" />
						</div> */}
						<div className="col-md-6 offset-md-6 info main-content">

							<div className="tab-info">

								<ul className="nav nav-pills">
									<li className="active">
										<a data-toggle="tab" href="#tab1" onClick={() => { onTabSwitch("Dashboard") }} aria-expanded="true">
											Dashboard
										</a>
									</li>

									<li>
										<a data-toggle="tab" href="#tab2" onClick={() => { onTabSwitch("Profile") }} aria-expanded="false">
											Personal Information
										</a>
									</li>

									<li>
										<a data-toggle="tab" href="#tab3" onClick={() => { onTabSwitch("Publications") }} aria-expanded="false">
											Publications
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row">
						{switchTab !== "Publications" && (
							<div className={switchTab === "Publications" ? "col-md-5 thumb fade" : "col-md-5 thumb"}>
								{switchTab === "Profile" ? <UploadProfile imageUrl={imageUrl} setImageUrl={setImageUrl} /> : <img src={imageUrl || "assets/img/team/no_profile_pic.jpg"} alt="Thumb" />}
							</div>
						)}

						<div className={switchTab === "Publications" ? "col-md-12 info main-content" : "col-md-7 info main-content"} >
							<div className="tab-content tab-content-info">
								<div id="tab1" className={switchTab === "Dashboard" ? dashboardClass : "tab-pane fade active in"}>
									<ShowProfile formData={formData} />
								</div>

								<div id="tab2" className={switchTab === "Profile" ? "tab-pane" : "tab-pane fade active in"}>
									<EditProfile formData={formData} onFormValueChange={onFormValueChange} handleUpdate={handleUpdate} />
								</div>

								<div id="tab3" className={switchTab === "Publications" ? "tab-pane" : "tab-pane fade active in"}>
									<Publications />
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;