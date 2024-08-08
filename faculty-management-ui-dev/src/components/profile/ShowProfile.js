import React from 'react'

const ShowProfile = (props) => {

    const formData = props?.formData;

    return (

        <div className="info title">
            <ul>
                <li>
                    User Name <span>{formData?.userName}</span>
                </li>
                <li>
                    Email <span>{formData?.email}</span>
                </li>
                <li>
                    College Name <span>{formData?.collegeName} </span>
                </li>
                <li>
                    Faculty Name <span>{formData?.facultyName}</span>
                </li>
                <li>
                    Gender <span>{formData?.gender}</span>
                </li>
                <li>
                    Mobile Number <span>{formData?.mobileNumber}</span>
                </li>
                <li>
                    Designation <span>{formData?.designation}</span>
                </li>
                <li>
                    Department <span>{formData?.department}</span>
                </li>
                <li>
                    Job Nature <span>{formData?.jobNature} </span>
                </li>
                <li>
                    Date of Joining <span>{formData?.dateOfJoining}</span>
                </li>
                <li>
                    Academic Qualification <span>{formData?.academicQualification}</span>
                </li>
                <li>
                    Publication History <span>{formData?.publicationHistory}</span>
                </li>
                <li>
                    About <span>{formData?.bio}</span>
                </li>
            </ul>
        </div>
    )
}

export default ShowProfile;
